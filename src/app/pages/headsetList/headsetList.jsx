import React from 'react';
import PropTypes from 'prop-types';
import {
  List, Typography, Divider, Layout, Row, Col,
} from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../../shape';

import HeadsetDetails from '../../components/headsetDetails';
import AutoCompleteHeadset from '../../components/autoCompleteHeadset';
import compare from '../../services/comparator';

const MAX_SELECT = 2;

class HeadsetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      compareMode: false,
      compareResult: {},
    };
  }

  filterSelected = (selected) => {
    const { items } = this.props;
    return items.filter((item) => selected.includes(item.id));
  };

  toggleSelected(id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    if (selectedIndex !== -1) {
      selected.splice(selectedIndex, 1);
      this.setState({ selected, compareMode: false });
    } else {
      if (selected.length >= MAX_SELECT) return;
      const newSelected = [...selected, id];
      let compareResult = {};
      if (newSelected.length === MAX_SELECT) {
        compareResult = compare(this.filterSelected(newSelected));
      }
      this.setState({
        selected: newSelected,
        compareMode: newSelected.length === MAX_SELECT,
        compareResult,
      });
    }
  }

  render() {
    const { items } = this.props;
    const { selected, compareMode, compareResult } = this.state;

    return (
      <>
        <Layout>
          <Typography.Title level={2}>Enter model name of 2 VR Headset</Typography.Title>

          <Row align="middle" justify="space-around">
            <Col style={{ display: 'flex', margin: 20 }}>
              <AutoCompleteHeadset
                items={items}
                valueSelected={selected[0]}
                alreadySelected={[selected[1]]}
                placeholder="Headset 1"
                onChange={(id) => this.toggleSelected(id)}
              />
            </Col>
            <Col style={{ display: 'flex', margin: 20 }}>
              <AutoCompleteHeadset
                items={items}
                valueSelected={selected[1]}
                alreadySelected={[selected[0]]}
                placeholder="Headset 2"
                onChange={(id) => this.toggleSelected(id)}
              />
            </Col>
          </Row>
        </Layout>

        <Divider />

        <Layout>
          <Typography.Title level={2}>
            You can also select 2 VR Headset in the list below
          </Typography.Title>
          <List
            grid={{
              gutter: 16,
              column: compareMode ? 2 : 4,
              sm: 2,
              lg: compareMode ? 2 : 3,
            }}
          >
            <ReactCSSTransitionGroup
              transitionName="fade-headsets"
              transitionEnterTimeout={700}
              transitionLeaveTimeout={300}
              className="ant-row headsets"
            >
              {items.map((item) => (compareMode && !selected.includes(item.id) ? undefined : (
                <div className={compareMode ? 'compare-mode' : 'normal-mode'}>
                  <List.Item>
                    <HeadsetDetails
                      selected={selected.includes(item.id)}
                      item={item}
                      compareMode={compareMode}
                      onClick={(id) => this.toggleSelected(id)}
                      compareResult={compareResult}
                    />
                  </List.Item>
                </div>
              )))}
            </ReactCSSTransitionGroup>
          </List>
        </Layout>
      </>
    );
  }
}

HeadsetList.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
};

HeadsetList.defaultProps = {
  items: [],
};

export default HeadsetList;

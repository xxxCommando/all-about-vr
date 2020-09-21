import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  List, Typography, Divider, Layout, Row, Col, Card,
} from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../../shape';

import HeadsetDetails from '../../components/headsetDetails';
import AutoCompleteHeadset from '../../components/autoCompleteHeadset';
import ComparatorService from '../../services/comparator';
import VsAnimation from '../../components/vsAnimation/vsAnimation';

const waitData = [
  'Headset 1',
  'Headset 2',
  'Headset 3',
  'Headset 4',
  'Headset 5',
  'Headset 6',
  'Headset 7',
  'Headset 8',
  'Headset 9',
  'Headset 10',
  'Headset 11',
  'Headset 12',
];

class HeadsetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparatorService: new ComparatorService(),
      compareMode: false,
      compareResult: {},
    };
  }

  toggleSelected(id, selectorIndex = null) {
    const { items } = this.props;
    const { comparatorService } = this.state;
    if (comparatorService.isSelected(id)) {
      comparatorService.remove(id);
      comparatorService.deleteFromMapping(id, selectorIndex);
      this.setState({ comparatorService, compareMode: false });
    } else {
      if (comparatorService.isFull()) return;
      const selectedItem = items.find((item) => item.id === id);
      comparatorService.addInMapping(selectedItem, selectorIndex);
      comparatorService.add(selectedItem, id);
      const isFull = comparatorService.isFull();
      let compareResult = {};
      if (isFull) {
        compareResult = comparatorService.doCompare();
      }
      this.setState({
        comparatorService,
        compareMode: isFull,
        compareResult,
      });
    }
  }

  render() {
    const { items } = this.props;
    const { comparatorService, compareMode, compareResult } = this.state;

    return (
      <>
        <Helmet>
          <title>Headset comparator - AllAboutVR</title>
          <meta
            name="description"
            content="Easier way to compare headset and find your best setup for VR ! Compare price, resolution, etc TODO"
          />
        </Helmet>
        <Typography.Title level={1}>Headset comparator</Typography.Title>
        <Divider orientation="left">Select a headset</Divider>
        <Layout>
          <Row align="middle" justify="space-around" className="auto-complete-wrapper">
            <Col>
              <AutoCompleteHeadset
                items={items}
                itemSelected={comparatorService.getInputMapping(0)}
                alreadySelected={comparatorService.getSelectedIds()}
                placeholder="Select headset 1"
                onChange={(id) => this.toggleSelected(id, 0)}
                disabled={items.length === 0}
              />
            </Col>
            <Col>
              {/* <VsAnimation />
            </Col>
            <Col> */}
              <AutoCompleteHeadset
                items={items}
                itemSelected={comparatorService.getInputMapping(1)}
                alreadySelected={comparatorService.getSelectedIds()}
                placeholder="Select headset 2"
                onChange={(id) => this.toggleSelected(id, 1)}
                disabled={items.length === 0}
              />
            </Col>
          </Row>
        </Layout>

        <Divider orientation="left">
          {compareMode ? 'Comparaison done' : 'Click on headsets to add in your comparison list'}
        </Divider>

        <Layout>
          <List
            grid={{
              gutter: 16,
              column: compareMode ? 2 : 4,
              sm: 2,
              lg: compareMode ? 2 : 3,
            }}
          >
            {items.length === 0 ? (
              <div className="ant-row headsets">
                {waitData.map((name) => (
                  <div className="normal-mode">
                    <List.Item>
                      <div className="headset-card">
                        <Card loading title={name} />
                      </div>
                    </List.Item>
                  </div>
                ))}
              </div>
            ) : (
              <ReactCSSTransitionGroup
                transitionName="fade-headsets"
                transitionEnterTimeout={700}
                transitionLeaveTimeout={300}
                className="ant-row headsets"
              >
                {items.map((item) => (compareMode && !comparatorService.isSelected(item.id) ? undefined : (
                  <div className={compareMode ? 'compare-mode' : 'normal-mode'}>
                    <List.Item>
                      <HeadsetDetails
                        selected={comparatorService.isSelected(item.id)}
                        item={item}
                        compareMode={compareMode}
                        onClick={(id) => this.toggleSelected(id)}
                        compareResult={compareResult}
                      />
                    </List.Item>
                  </div>
                )))}
              </ReactCSSTransitionGroup>
            )}
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

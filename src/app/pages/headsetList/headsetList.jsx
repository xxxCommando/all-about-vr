import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../../shape';

import HeadsetCard from '../../components/headsetCard';
import AutoCompleteHeadset from '../../components/autoCompleteHeadset';

const MAX_SELECT = 2;

class HeadsetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      compareMode: false,
    };
  }

  filterSelected = () => {
    const { items } = this.props;
    const { selected } = this.state;
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
      this.setState({
        selected: newSelected,
        compareMode: newSelected.length === MAX_SELECT,
      });
    }
  }

  render() {
    const { items } = this.props;
    const { selected, compareMode } = this.state;

    return (
      <div>
        <Typography.Title level={2}>Enter model name of 2 VR Headset</Typography.Title>

        <AutoCompleteHeadset
          items={items}
          valueSelected={selected[0]}
          alreadySelected={[selected[1]]}
          placeholder="Headset 1"
          onChange={(id) => this.toggleSelected(id)}
        />

        <AutoCompleteHeadset
          items={items}
          valueSelected={selected[1]}
          alreadySelected={[selected[0]]}
          placeholder="Headset 2"
          onChange={(id) => this.toggleSelected(id)}
        />

        <hr />
        <Typography.Title level={2}>You can also select 2 VR Headset in the list below</Typography.Title>
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
                  <HeadsetCard
                    selectForCompare={selected.includes(item.id)}
                    item={item}
                    compareMode={compareMode}
                    onClick={(id) => this.toggleSelected(id)}
                  />
                </List.Item>
              </div>
            )))}
          </ReactCSSTransitionGroup>
        </List>
      </div>
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

import React from 'react';
import PropTypes from 'prop-types';
import { List, AutoComplete } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../../shape';

import HeadsetCard from '../../components/headsetCard';

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

  onSelect = (data, option) => {
    console.log('onSelect', data, option);
    this.toggleSelected(option.id);
  };

  toggleSelected(id) {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    if (selectedIndex !== -1) {
      selected.splice(selectedIndex, 1);
      this.setState({ selected, compareMode: false });
    } else {
      const newSelected = [...selected, id];
      this.setState({
        selected: newSelected,
        compareMode: newSelected.length === 2,
      });
    }
  }

  render() {
    const { items } = this.props;
    const { selected, compareMode } = this.state;

    return (
      <div>
        <h2>Enter model name of 2 VR Headset </h2>
        <AutoComplete
          onSelect={this.onSelect}
          value={selected[0]}
          style={{ width: 200 }}
          options={items.map((headset) => ({
            value: headset.name,
            id: headset.id,
          }))}
          placeholder="Headset 1"
          filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />

        <AutoComplete
          onSelect={this.onSelect}
          value={selected[1]}
          style={{ width: 200 }}
          options={items.map((headset) => ({
            value: headset.name,
          }))}
          placeholder="Headset 2"
          filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />

        <hr />
        <h2>You can also select 2 VR Headset in the list below</h2>
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

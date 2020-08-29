import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './headsetList.scss';
import { HeadsetShape } from '../../../shape';

import HeadsetCard from '../headsetCard';

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
  }

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
          {
              items.map((item) => (
                compareMode && !selected.includes(item.id)
                  ? undefined
                  : (
                    <div className={compareMode ? 'compare-mode' : 'normal-mode'}>
                      <List.Item>
                        <HeadsetCard
                          selectForCompare={selected.includes(item.id)}
                          item={item}
                          compareMode={compareMode}
                          toggleSelected={(id) => this.toggleSelected(id)}
                        />
                      </List.Item>
                    </div>
                  )
              ))
            }
        </ReactCSSTransitionGroup>
      </List>
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

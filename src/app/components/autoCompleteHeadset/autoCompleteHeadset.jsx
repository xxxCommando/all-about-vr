import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

import { HeadsetShape } from '../../../shape';

class AutoCompleteHeadset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedId: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { items, valueSelected } = nextProps;
    const { selectedId } = prevState;
    if (valueSelected && selectedId === null) {
      const headset = items.find((item) => item.id === valueSelected);
      return {
        value: headset.name,
        selectedId: headset.id,
      };
    }
    if (valueSelected === '' && selectedId) {
      return {
        value: '',
        selectedId: null,
      };
    }
    return prevState;
  }

  onChange = (data, options) => {
    const { onChange } = this.props;
    const { selectedId } = this.state;
    const newState = { ...this.state };

    if (selectedId && Object.entries(options).length !== 0) {
      onChange(selectedId);
      onChange(options.id);
      newState.selectedId = options.id;
    } else if (Object.entries(options).length !== 0) {
      onChange(options.id);
      newState.selectedId = options.id;
    } else if (selectedId) {
      onChange(selectedId);
      newState.selectedId = null;
    }

    newState.value = data;
    this.setState(newState);
  };

  render() {
    const { items, placeholder, alreadySelected } = this.props;
    const { value } = this.state;
    return (
      <AutoComplete
        value={value}
        style={{ width: 200 }}
        onChange={this.onChange}
        options={items
          .map((headset) => ({
            value: headset.name,
            id: headset.id,
          }))
          .filter((item) => !alreadySelected.includes(item.id))}
        placeholder={placeholder}
      />
    );
  }
}

AutoCompleteHeadset.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
  valueSelected: PropTypes.string,
  alreadySelected: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

AutoCompleteHeadset.defaultProps = {
  items: [],
  valueSelected: '',
  alreadySelected: [''],
  placeholder: '',
  onChange: console.warn('onChange is not defined'),
};

export default AutoCompleteHeadset;

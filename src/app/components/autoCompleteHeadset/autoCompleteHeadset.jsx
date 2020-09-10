import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete, Button, Tooltip } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './autoCompleteHeadset.scss';
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
      this.clearInput();
    }

    newState.value = data;
    this.setState(newState);
  };

  clearInput = () => {
    const { onChange } = this.props;
    const { selectedId } = this.state;
    onChange(selectedId);
    this.setState({
      value: '',
      selectedId: null,
    });
  };

  render() {
    const { items, placeholder, alreadySelected } = this.props;
    const { value } = this.state;
    return (
      <>
        <AutoComplete
          value={value}
          className="auto-complete-headset"
          onChange={this.onChange}
          options={items
            .map((headset) => ({
              value: headset.name,
              id: headset.id,
            }))
            .filter((item) => !alreadySelected.includes(item.id))}
          placeholder={placeholder}
          filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        />
        <Tooltip title="delete" className="auto-complete-headset-delete">
          <Button
            type="primary"
            icon={<CloseOutlined />}
            disabled={value === ''}
            onClick={this.clearInput}
          />
        </Tooltip>
      </>
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

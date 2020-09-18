import React from 'react';
import PropTypes from 'prop-types';
import {
  AutoComplete, Button, Tooltip, Input, Card, Avatar,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import './autoCompleteHeadset.scss';
import { HeadsetShape } from '../../../shape';

class AutoCompleteHeadset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSelected: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { itemSelected } = nextProps;
    const { isSelected } = prevState;
    if (itemSelected && !isSelected) {
      return {
        value: itemSelected.name,
        isSelected: true,
      };
    }
    if (itemSelected === null && isSelected) {
      return {
        value: '',
        isSelected: false,
      };
    }
    return prevState;
  }

  onChange = (data, options) => {
    const { onChange, itemSelected } = this.props;
    const newState = { ...this.state };

    if (itemSelected && Object.entries(options).length !== 0) {
      onChange(itemSelected.id);
      onChange(options.id);
      newState.isSelected = true;
    } else if (Object.entries(options).length !== 0) {
      onChange(options.id);
      newState.isSelected = true;
    } else if (itemSelected) {
      this.clearInput();
    }

    newState.value = data;
    this.setState(newState);
  };

  clearInput = () => {
    const { onChange, itemSelected } = this.props;
    if (itemSelected) {
      onChange(itemSelected.id);
    }
    this.setState({
      value: '',
      isSelected: false,
    });
  };

  render() {
    const {
      items, placeholder, itemSelected, alreadySelected, disabled,
    } = this.props;
    const { value } = this.state;
    return (
      <>
        <AutoComplete
          value={value}
          className="auto-complete-headset"
          dropdownClassName="auto-complete-headset-dropdown"
          onChange={this.onChange}
          options={items
            .map((headset) => ({
              value: headset.name,
              id: headset.id,
              label: (
                <Card className="auto-complete-card">
                  <Card.Meta
                    avatar={<Avatar src={headset.img} shape="square" />}
                    title={headset.name}
                  />
                </Card>
              ),
            }))
            .filter((item) => !alreadySelected.includes(item.id))}
          filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
          disabled={disabled}
        >
          <Input
            prefix={
              itemSelected ? (
                <Avatar size="large" shape="square" src={itemSelected.img} alt={value} />
              ) : (
                <Avatar size="large" style={{ background: 'none' }} />
              )
            }
            placeholder={placeholder}
            maxLength="50"
            enterButton
            size="large"
            suffix={(
              <Tooltip title="delete" className="auto-complete-headset-delete">
                <Button
                  type="primary"
                  size="large"
                  icon={<CloseOutlined />}
                  disabled={value === ''}
                  onClick={this.clearInput}
                />
              </Tooltip>
            )}
          />
        </AutoComplete>
      </>
    );
  }
}

AutoCompleteHeadset.propTypes = {
  items: PropTypes.arrayOf(HeadsetShape),
  itemSelected: HeadsetShape,
  alreadySelected: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

AutoCompleteHeadset.defaultProps = {
  items: [],
  itemSelected: null,
  alreadySelected: [''],
  placeholder: '',
  onChange: console.warn('onChange is not defined'),
  disabled: true,
};

export default AutoCompleteHeadset;

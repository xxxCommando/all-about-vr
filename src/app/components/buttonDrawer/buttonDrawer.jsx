import React from 'react';
import PropTypes from 'prop-types';

import {
  Drawer, Button,
} from 'antd';
import { FilterOutlined, ClearOutlined } from '@ant-design/icons';
import FilterSider from '../filterSider';
import './buttonDrawer.scss';

const initialState = {
  outDatated: true,
  comingSoon: true,
  brands: [],
  platforms: [],
  audience: 'all',
  min: 0,
  max: 5800,
};

class buttonDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      ...initialState,
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  doClear = () => {
    const { clearFilters } = this.props;
    this.setState({
      ...initialState,
    });
    clearFilters();
  };

  render() {
    const { compareMode, isFiltered } = this.props;
    const {
      visible,
    } = this.state;
    return (
      <>
        <div>
          {isFiltered ? (
            <Button
              type="text"
              className="button-custom"
              onClick={() => this.doClear()}
              disabled={compareMode}
            >
              Reset
              <ClearOutlined />
            </Button>
          ) : null}
          <Button
            type="text"
            className="button-custom"
            onClick={this.showDrawer}
            disabled={compareMode}
          >
            Filters
            <FilterOutlined />
          </Button>
        </div>
        <Drawer title="Filters" placement="right" closable onClose={this.onClose} visible={visible}>
          <FilterSider />
        </Drawer>
      </>
    );
  }
}

buttonDrawer.propTypes = {
  compareMode: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  clearFilters: PropTypes.bool.isRequired,
};

export default buttonDrawer;

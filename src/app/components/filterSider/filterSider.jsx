import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Switch, Row, Col, Select, Input, Checkbox,
} from 'antd';
import { ClearOutlined } from '@ant-design/icons';

import './filterSider.scss';

const brandsList = [
  { label: 'Oculus', value: 'oculus' },
  { label: 'HTC', value: 'htc' },
  { label: 'Pimax', value: 'pimax' },
  { label: 'Valve', value: 'valve' },
  { label: 'VRgineers', value: 'vrgineers' },
  { label: 'StarVR', value: 'starvr' },
  { label: 'HP', value: 'hp' },
  { label: 'Playstation', value: 'playstation' },
];

const platformsList = [
  { label: 'Oculus', value: 'oculus' },
  { label: 'Steam', value: 'steam' },
  { label: 'WMR', value: 'windows' },
  { label: 'Playstation', value: 'playstation' },
];

const initialState = {
  outDatated: true,
  comingSoon: true,
  brands: [],
  platforms: [],
  audience: 'all',
  min: 0,
  max: 5800,
};

class FilterSider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      ...initialState,
    };
  }

  showDrawer = () => {
    this.setState({

    });
  };

  onClose = () => {
    this.setState({

    });
  };

  onChangeOutDatated = (bool) => {
    const { updateFilters } = this.props;
    this.setState({
      outDatated: bool,
    });
    updateFilters({
      outDatated: bool,
    });
  };

  onChangeComingSoond = (bool) => {
    const { updateFilters } = this.props;
    this.setState({
      comingSoon: bool,
    });
    updateFilters({
      comingSoon: bool,
    });
  };

  onChangeMin = (min) => {
    const { updateFilters } = this.props;
    updateFilters({
      priceMin: min,
    });
    this.setState({ min });
  };

  onChangeMax = (max) => {
    const { updateFilters } = this.props;
    updateFilters({
      priceMax: max,
    });
    this.setState({ max });
  };

  onChangeBrands = (checkedValues) => {
    const { updateFilters } = this.props;
    this.setState({ brands: checkedValues });
    updateFilters({
      brands: checkedValues,
    });
  };

  onChangePlatforms = (checkedValues) => {
    const { updateFilters } = this.props;
    this.setState({ platforms: checkedValues });
    updateFilters({
      platforms: checkedValues,
    });
  };

  onChangeAudience = (value) => {
    const { updateFilters } = this.props;
    this.setState({ audience: value });
    updateFilters({
      audience: value,
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
      outDatated, comingSoon, brands, platforms, audience, min, max,
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

        </div>
        <div>
          <Row align="middle" justify="center" className="filters">
            <Col>
              <span>Outdated</span>
              <Switch
                defaultChecked
                checked={outDatated}
                checkedChildren="show"
                unCheckedChildren="hide"
                onChange={(bool) => this.onChangeOutDatated(bool)}
              />
            </Col>
            <Col>
              <span>Coming soon</span>
              <Switch
                defaultChecked
                checked={comingSoon}
                checkedChildren="show"
                unCheckedChildren="hide"
                onChange={(bool) => this.onChangeComingSoond(bool)}
              />
            </Col>
            <Col className="inline">
              <span>Brands</span>
              <Row>
                <Col>
                  <Checkbox.Group
                    value={brands}
                    options={brandsList}
                    onChange={(e) => this.onChangeBrands(e)}
                  />
                </Col>
              </Row>
            </Col>
            <Col className="inline">
              <span>Price</span>
              <Row>
                <Col>
                  <span>Max.</span>
                  <Input
                    value={min}
                    addonAfter="$"
                    onChange={(e) => this.onChangeMin(e.target.value)}
                  />
                </Col>
                <Col>
                  <span>Min.</span>
                  <Input
                    value={max}
                    addonAfter="$"
                    onChange={(e) => this.onChangeMax(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
            <Col>
              <span>Audience</span>
              <Select
                defaultValue="all"
                value={audience}
                onChange={(value) => this.onChangeAudience(value)}
              >
                <Select.Option value="all">All</Select.Option>
                <Select.Option value="enterprise">Enterprise</Select.Option>
                <Select.Option value="public">Public</Select.Option>
              </Select>
            </Col>
            <Col className="inline">
              <span>Platforms</span>
              <Row>
                <Col>
                  <Checkbox.Group
                    value={platforms}
                    options={platformsList}
                    onChange={(e) => this.onChangePlatforms(e)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

FilterSider.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  compareMode: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  clearFilters: PropTypes.bool.isRequired,
};

export default FilterSider;

import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch, Row, Col, Select, Input, Checkbox,
} from 'antd';

import './filter.scss';

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

class Filter extends React.Component {
  onChangeOutDatated = (bool) => {
    const { updateFilters } = this.props;
    updateFilters({
      outDatated: bool,
    });
  };

  onChangeComingSoond = (bool) => {
    const { updateFilters } = this.props;
    updateFilters({
      comingSoon: bool,
    });
  };

  onChangeMin = (min) => {
    const { updateFilters } = this.props;
    updateFilters({
      priceMin: min,
    });
  };

  onChangeMax = (max) => {
    const { updateFilters } = this.props;
    updateFilters({
      priceMax: max,
    });
  };

  onChangeBrands = (checkedValues) => {
    const { updateFilters } = this.props;
    updateFilters({
      brands: checkedValues,
    });
  };

  onChangePlatforms = (checkedValues) => {
    const { updateFilters } = this.props;
    updateFilters({
      platforms: checkedValues,
    });
  };

  onChangeAudience = (value) => {
    const { updateFilters } = this.props;
    updateFilters({
      audience: value,
    });
  };

  render() {
    const {
      outDatated, comingSoon, min, max, brands, platforms, audience,
    } = this.props;
    return (
      <div className="filter">
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
                  value={max}
                  addonAfter="$"
                  onChange={(e) => this.onChangeMax(e.target.value)}
                />
              </Col>
              <Col>
                <span>Min.</span>
                <Input
                  value={min}
                  addonAfter="$"
                  onChange={(e) => this.onChangeMin(e.target.value)}
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
    );
  }
}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  outDatated: PropTypes.bool.isRequired,
  comingSoon: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
  audience: PropTypes.number.isRequired,
};

export default Filter;

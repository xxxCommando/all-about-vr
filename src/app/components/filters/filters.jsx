import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch, Row, Col, Select, Input, Checkbox,
} from 'antd';

import './filters.scss';

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

const Filters = (props) => {
  const onChangeOutDatated = (bool) => {
    const { updateFilters } = props;
    updateFilters({
      outDatated: bool,
    });
  };

  const onChangeComingSoond = (bool) => {
    const { updateFilters } = props;
    updateFilters({
      comingSoon: bool,
    });
  };

  const onChangeMin = (min) => {
    const { updateFilters } = props;
    updateFilters({
      priceMin: min,
    });
  };

  const onChangeMax = (max) => {
    const { updateFilters } = props;
    updateFilters({
      priceMax: max,
    });
  };

  const onChangeBrands = (checkedValues) => {
    const { updateFilters } = props;
    updateFilters({
      brands: checkedValues,
    });
  };

  const onChangePlatforms = (checkedValues) => {
    const { updateFilters } = props;
    updateFilters({
      platforms: checkedValues,
    });
  };

  const onChangeAudience = (value) => {
    const { updateFilters } = props;
    updateFilters({
      audience: value,
    });
  };

  const {
    outDatated, comingSoon, min, max, brands, platforms, audience,
  } = props;
  return (
    <Row align="middle" justify="center" className="filters">
      <Col>
        <span>Outdated</span>
        <Switch
          defaultChecked
          checked={outDatated}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeOutDatated(bool)}
        />
      </Col>
      <Col>
        <span>Coming soon</span>
        <Switch
          defaultChecked
          checked={comingSoon}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeComingSoond(bool)}
        />
      </Col>
      <Col className="inline">
        <span>Brands</span>
        <Row>
          <Col>
            <Checkbox.Group
              value={brands}
              options={brandsList}
              onChange={(e) => onChangeBrands(e)}
            />
          </Col>
        </Row>
      </Col>
      <Col className="inline">
        <span>Price</span>
        <Row>
          <Col>
            <span>Max.</span>
            <Input value={max} addonAfter="$" onChange={(e) => onChangeMax(e.target.value)} />
          </Col>
          <Col>
            <span>Min.</span>
            <Input value={min} addonAfter="$" onChange={(e) => onChangeMin(e.target.value)} />
          </Col>
        </Row>
      </Col>
      <Col>
        <span>Audience</span>
        <Select defaultValue="all" value={audience} onChange={(value) => onChangeAudience(value)}>
          <Select.Option value="all">All</Select.Option>
          <Select.Option value="business">Business</Select.Option>
          <Select.Option value="consumer">Consumer</Select.Option>
        </Select>
      </Col>
      <Col className="inline">
        <span>Platforms</span>
        <Row>
          <Col>
            <Checkbox.Group
              value={platforms}
              options={platformsList}
              onChange={(e) => onChangePlatforms(e)}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Filters.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  outDatated: PropTypes.bool.isRequired,
  comingSoon: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
  audience: PropTypes.number.isRequired,
};

export default Filters;

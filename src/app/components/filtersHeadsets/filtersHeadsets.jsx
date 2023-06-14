import React from 'react';
import PropTypes from 'prop-types';

import {
  Switch, Input, Checkbox, Button, Popover,
} from 'antd';

import './filtersHeadsets.scss';

const brandsList = [
  { label: 'Oculus', value: 'oculus' },
  { label: 'HTC', value: 'htc' },
  { label: 'Pimax', value: 'pimax' },

];

const brandsList2 = [
  { label: 'Valve', value: 'valve' },
  { label: 'Apple', value: 'apple' },
  { label: 'VRgineers', value: 'vrgineers' },

];

const brandsList3 = [
  { label: 'StarVR', value: 'starvr' },
  { label: 'HP', value: 'hp' },
  { label: 'Playstation', value: 'playstation' },
];

const platformsList = [
  { label: 'Oculus', value: 'oculus' },
  { label: 'Steam', value: 'steam' },
  { label: 'WMR', value: 'windows' },
  { label: 'Apple', value: 'macos' },
  { label: 'Playstation', value: 'playstation' },
];

const FiltersHeadsets = (props) => {
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

  const onChangeConsumer = (bool) => {
    const { updateFilters } = props;
    updateFilters({
      consumer: bool,
    });
  };

  const onChangeBusiness = (bool) => {
    const { updateFilters } = props;
    updateFilters({
      business: bool,
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

  const {
    outDatated, comingSoon, min, max, brands, platforms, consumer, business,
  } = props;

  const status = (
    <div className="filters-grid">
      <div className="filters-grid-label">
        <span>Outdated</span>
      </div>
      <div>
        <Switch
          defaultChecked
          checked={outDatated}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeOutDatated(bool)}
        />
      </div>
      <div className="filters-grid-label">
        <span>Coming Soon</span>
      </div>
      <div>
        <Switch
          defaultChecked
          checked={comingSoon}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeComingSoond(bool)}
        />
      </div>
      <div className="filters-grid-label">
        <span>Consumer</span>
      </div>
      <div>
        <Switch
          defaultChecked
          checked={consumer}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeConsumer(bool)}
        />
      </div>
      <div className="filters-grid-label">
        <span>Business</span>
      </div>
      <div>
        <Switch
          defaultChecked
          checked={business}
          checkedChildren="show"
          unCheckedChildren="hide"
          onChange={(bool) => onChangeBusiness(bool)}
        />
      </div>
    </div>
  );

  const price = (
    <div className="filters-price">

      <span>Price Max.</span>
      <Input value={max} addonAfter="$" onChange={(e) => onChangeMax(e.target.value)} />

      <span>Price Min.</span>
      <Input value={min} addonAfter="$" onChange={(e) => onChangeMin(e.target.value)} />
    </div>
  );

  const brand = (
    <div>
      <div className="filters-container">
        <div>

          <Checkbox.Group
            className="checkbox-group-custom"
            value={brands}
            options={brandsList}
            onChange={(e) => onChangeBrands(e)}
          />
        </div>

        <div>
          <Checkbox.Group
            className="checkbox-group-custom"
            value={brands}
            options={brandsList2}
            onChange={(e) => onChangeBrands(e)}
          />
        </div>

        <div>
          <Checkbox.Group
            className="checkbox-group-custom"
            value={brands}
            options={brandsList3}
            onChange={(e) => onChangeBrands(e)}
          />
        </div>

      </div>

    </div>
  );

  const platform = (
    <div>
      <div className="filters-container">
        <Checkbox.Group
          className="checkbox-group-custom"
          value={platforms}
          options={platformsList}
          onChange={(e) => onChangePlatforms(e)}
        />
      </div>

    </div>
  );
  return (
    <>

      <div className="filters-container">
        <div className="filters-button">
          <Popover placement="bottom" content={status} trigger="click">
            <Button id="popover">Status</Button>
          </Popover>
        </div>
        <div className="filters-button">
          <Popover placement="bottom" content={price} trigger="click">
            <Button id="popover">Price</Button>
          </Popover>
        </div>
        <div className="filters-button">
          <Popover placement="bottom" content={brand} trigger="click">
            <Button id="popover">Brands</Button>
          </Popover>
        </div>
        <div className="filters-button">
          <Popover placement="bottom" content={platform} trigger="click">
            <Button id="popover">Platforms</Button>
          </Popover>
        </div>

      </div>

    </>

  );
};

FiltersHeadsets.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  outDatated: PropTypes.bool.isRequired,
  comingSoon: PropTypes.bool.isRequired,
  consumer: PropTypes.bool.isRequired,
  business: PropTypes.bool.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  brands: PropTypes.arrayOf(PropTypes.string).isRequired,
  platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FiltersHeadsets;

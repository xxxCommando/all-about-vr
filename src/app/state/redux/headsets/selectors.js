import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.headsets.visibilityFilter;
const getHeadsets = (state) => state.headsets.items;

const getVisibleHeadsets = createSelector(
  [getVisibilityFilter, getHeadsets],
  (visibilityFilter, headsets) => {
    let filtredHeadsets = [...headsets];
    // out datared
    if (!visibilityFilter.outDatated) {
      filtredHeadsets = filtredHeadsets.filter((h) => h.status !== 3);
    }
    // coming soon
    if (!visibilityFilter.comingSoon) {
      filtredHeadsets = filtredHeadsets.filter((h) => h.status !== 1);
    }
    // audience
    if (visibilityFilter.audience !== 'all') {
      if (visibilityFilter.audience === 'public') {
        filtredHeadsets = filtredHeadsets.filter((h) => h.audience === 1);
      }
      if (visibilityFilter.audience === 'enterprise') {
        filtredHeadsets = filtredHeadsets.filter((h) => h.audience === 2);
      }
    }
    // price
    if (visibilityFilter.priceMin !== 0) {
      filtredHeadsets = filtredHeadsets.filter((h) => h.price >= visibilityFilter.priceMin);
    }
    if (visibilityFilter.priceMax) {
      filtredHeadsets = filtredHeadsets.filter((h) => h.price <= visibilityFilter.priceMax);
    }
    // brands
    if (visibilityFilter.brands.length) {
      filtredHeadsets = filtredHeadsets.filter(
        (h) => visibilityFilter.brands.includes(h.brand.toLowerCase()),
      );
    }
    // platforms
    if (visibilityFilter.platforms.length) {
      filtredHeadsets = filtredHeadsets.filter(
        (h) => visibilityFilter.platforms.some((r) => h.platform.indexOf(r) >= 0),
      );
    }
    return filtredHeadsets;
  },
);

export default getVisibleHeadsets;

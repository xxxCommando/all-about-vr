import { connect } from 'react-redux';
import FiltersHeadsets from './filtersHeadsets';
import {
  updateFilters,
  clearFilters,
} from '../../state/redux/headsets/actions';

const mapStateToProps = (state) => ({
  isFiltered: state.headsets.isFiltered,
  filters: state.headsets.visibilityFilter,
  compareMode: state.compare.compareMode,
  outDatated: state.headsets.visibilityFilter.outDatated,
  comingSoon: state.headsets.visibilityFilter.comingSoon,
  consumer: state.headsets.visibilityFilter.consumer,
  business: state.headsets.visibilityFilter.business,
  min: state.headsets.visibilityFilter.priceMin,
  max: state.headsets.visibilityFilter.priceMax,
  brands: state.headsets.visibilityFilter.brands,
  platforms: state.headsets.visibilityFilter.platforms,
  audience: state.headsets.visibilityFilter.audience,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters = {}) => dispatch(updateFilters(filters)),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersHeadsets);

import { connect } from 'react-redux';
import Filters from './filters';
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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

import { connect } from 'react-redux';
import filterSider from './filterSider';
import {
  updateFilters,
  clearFilters,
} from '../../redux/headsets/actions';

const mapStateToProps = (state) => ({
  isFiltered: state.headsets.isFiltered,
  filters: state.headsets.visibilityFilter,
  compareMode: state.compare.compareMode,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters = {}) => dispatch(updateFilters(filters)),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(filterSider);

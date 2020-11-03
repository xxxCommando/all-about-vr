import { connect } from 'react-redux';
import HeadsetsTab from './headsetsTab';
import {
  updateFilters,
  clearFilters,
} from '../../redux/headsets/actions';
import getVisibleHeadsets from '../../redux/headsets/selectors';

const mapStateToProps = (state) => ({
  items: getVisibleHeadsets(state),
  isFiltered: state.headsets.isFiltered,
  filters: state.headsets.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilters: (filters = {}) => dispatch(updateFilters(filters)),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadsetsTab);

import { connect } from 'react-redux';
import header from './header';
import {
  doClear,
} from '../../redux/compare/actions';
import {
  clearFilters,
} from '../../redux/headsets/actions';
import { toggleDarkMode } from '../../redux/all-about-vr/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  doClear: () => dispatch(doClear()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);

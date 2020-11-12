import { connect } from 'react-redux';
import header from './header';
import {
  doClear,
} from '../../state/redux/compare/actions';
import {
  clearFilters,
} from '../../state/redux/headsets/actions';
import { toggleDarkMode } from '../../state/redux/all-about-vr/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  doClear: () => dispatch(doClear()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);

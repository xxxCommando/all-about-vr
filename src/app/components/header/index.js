import { connect } from 'react-redux';
import header from './header';
import {
  doClear,
} from '../../redux/compare/actions';
import { toggleDarkMode } from '../../redux/all-about-vr/actions';

const mapStateToProps = (state) => ({
  darkMode: state.allAboutVR.darkMode.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  doClear: () => dispatch(doClear()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);

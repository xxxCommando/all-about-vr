import { connect } from 'react-redux';
import App from './app';
import { fetchHeadsets } from './redux/headsets/actions';

const mapStateToProps = (state) => ({
  formatedHeadset: state.headsets.formatedHeadset,
  isLoaded: state.headsets.isLoaded,
  isFetching: state.headsets.isFetching,
  fatalError: state.headsets.fatalError,
  darkMode: state.allAboutVR.darkMode.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeadsets: () => dispatch(fetchHeadsets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

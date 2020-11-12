import { connect } from 'react-redux';
import App from './app';
import { fetchHeadsets } from './state/redux/headsets/actions';
import { fetchGames } from './state/redux/games/actions';

const mapStateToProps = (state) => ({
  isLoaded: state.headsets.isLoaded,
  isFetching: state.headsets.isFetching,
  isLoadedGame: state.games.isLoaded,
  isFetchingGame: state.games.isFetching,
  fatalError: state.headsets.fatalError,
  fatalErrorGame: state.games.fatalError,
  darkMode: state.allAboutVR.darkMode.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeadsets: () => dispatch(fetchHeadsets()),
  fetchGames: () => dispatch(fetchGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import App from './app';
import { fetchHeadsets } from './redux/headsets/actions';
import { fetchGames } from './redux/games/actions';

const mapStateToProps = (state) => ({
  formatedHeadset: state.headsets.formatedHeadset,
  isLoaded: state.headsets.isLoaded,
  isFetching: state.headsets.isFetching,
  fatalError: state.headsets.fatalError,
  formatedGame: state.games.formatedGame,
  isLoadedGame: state.games.isLoaded,
  isFetchingGame: state.games.isFetching,
  fatalErrorGame: state.games.fatalError,
  darkMode: state.allAboutVR.darkMode.darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHeadsets: () => dispatch(fetchHeadsets()),
  fetchGames: () => dispatch(fetchGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

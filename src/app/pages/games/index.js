import { connect } from 'react-redux';
import Games from './games';

const mapStateToProps = (state) => ({
  items: state.games.formatedGames,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);

import { connect } from 'react-redux';
import Headset from './headset';

const mapStateToProps = (state, props) => ({
  item: state.headsets.items.find((e) => e.id === props.id),
});

export default connect(mapStateToProps)(Headset);

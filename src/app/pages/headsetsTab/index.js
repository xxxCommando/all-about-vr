import { connect } from 'react-redux';
import HeadsetsTab from './headsetsTab';
import getVisibleHeadsets from '../../redux/headsets/selectors';

const mapStateToProps = (state) => ({
  items: getVisibleHeadsets(state),
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadsetsTab);

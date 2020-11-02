import { connect } from 'react-redux';
import buttonDrawer from './buttonDrawer';
import {
  clearFilters,
} from '../../redux/headsets/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(buttonDrawer);

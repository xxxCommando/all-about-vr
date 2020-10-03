import { connect } from 'react-redux';
import header from './header';
import {
  doClear,
} from '../../redux/compare/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  doClear: () => dispatch(doClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);

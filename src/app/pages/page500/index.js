import { connect } from 'react-redux';
import Page500 from './page500';
import { toggleMainClass } from '../../redux/all-about-vr/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggleMainClass: (className) => dispatch(toggleMainClass(className)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page500);

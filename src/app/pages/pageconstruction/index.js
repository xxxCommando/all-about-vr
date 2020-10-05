import { connect } from 'react-redux';
import Construction from './construction';
import { toggleMainClass } from '../../redux/all-about-vr/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggleMainClass: (className) => dispatch(toggleMainClass(className)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Construction);

import { connect } from 'react-redux';
import headsetList from './headsetList';
import {
  addMapping,
  removeMapping,
  add,
  remove,
  setCompareMode,
  doCompare,
  doClear,
} from '../../redux/compare/actions';
import getVisibleHeadsets from '../../redux/headsets/selectors';

const mapStateToProps = (state) => ({
  items: getVisibleHeadsets(state),
  isFiltered: state.headsets.isFiltered,
  selected: state.compare.selected,
  inputMapping: state.compare.inputMapping,
  selectedIds: state.compare.selectedIds,
  compareMode: state.compare.compareMode,
  compareResult: state.compare.compareResult,
});

const mapDispatchToProps = (dispatch) => ({
  addMapping: (item, selectorIndex = null) => dispatch(addMapping(item, selectorIndex)),
  removeMapping: (id, selectorIndex = null) => dispatch(removeMapping(id, selectorIndex)),
  add: (item, id) => dispatch(add(item, id)),
  remove: (id) => dispatch(remove(id)),
  setCompareMode: (bool) => dispatch(setCompareMode(bool)),
  doCompare: () => dispatch(doCompare()),
  doClear: () => dispatch(doClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(headsetList);

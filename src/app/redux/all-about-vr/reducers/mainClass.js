import {
  TOGGLE_MAIN_CLASS,
} from '../types';

const initialState = {
  mainClassName: ['App'],
};

export default function mainClass(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MAIN_CLASS: {
      let newMainClassName = [...state.mainClassName];
      const { className } = action;
      if (newMainClassName.includes(className)) {
        newMainClassName = newMainClassName.filter((item) => item !== className);
      } else {
        newMainClassName = [...newMainClassName, className];
      }
      return {
        ...state,
        mainClassName: newMainClassName,
      };
    }

    default:
      return state;
  }
}

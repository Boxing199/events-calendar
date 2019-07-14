import * as type from '../actions/actionTypes';

export const initialState = {
  today: new Date(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.NEXT_MONTH:
      return { ...state, currentMonth: state.currentMonth+1 };
    case type.PREV_MONTH:
      return { ...state, currentMonth: state.currentMonth-1 };
    case type.THIS_MONTH:
      return { ...state, currentMonth: state.today.getMonth() };  
    default:
      return state;
  }
};
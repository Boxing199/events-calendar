import * as type from '../actions/actionTypes';

export const initialState = {
  today: new Date(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.NEXT_MONTH:
      //return { ...state, currentMonth: state.currentMonth+1 };
      if (state.currentMonth === 11) {
        return { ...state, currentMonth: 0, currentYear: state.currentYear+1 };
      }
      return { ...state, currentMonth: state.currentMonth+1 };
    case type.PREV_MONTH:
        if (state.currentMonth === 0) {
          return { ...state, currentMonth: 11, currentYear: state.currentYear-1 };
        }
      return { ...state, currentMonth: state.currentMonth-1 };
    case type.THIS_MONTH:
      return { ...state, currentMonth: state.today.getMonth(), currentYear: state.today.getFullYear() };  
    default:
      return state;
  }
};
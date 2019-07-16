import * as type from '../actions/actionTypes';

export const initialState = {
  today: new Date(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  eventWindow: "closed",
};
export const data = (state = initialState, action) => {
  switch (action.type) {
    case type.NEXT_MONTH:
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
    case type.OPEN_WINDOW:
      return { ...state, eventWindow: "open" };
    case type.CLOSE_WINDOW:
      return { ...state, eventWindow: "closed" };
    default:
      return state;
  }
};
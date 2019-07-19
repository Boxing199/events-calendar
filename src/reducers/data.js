import * as type from '../actions/actionTypes';

export const initialState = {
  today: new Date(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  eventWindow: "closed",
  selectedDay: null,
  events: {},
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
    case type.SELECTED_DAY:
      return { ...state, selectedDay: action.monthDay };
    case type.SAVE_EVENT:
      const selectedDayYear = state.selectedDay.getFullYear();
      const selectedDayMonth = state.selectedDay.getMonth()+1;
      const selectedDayDate = state.selectedDay.getDate();
      if(state.events[selectedDayYear] === undefined) {
        return { ...state, events: { ...state.events, [selectedDayYear]: {
            [selectedDayMonth]: {
              [selectedDayDate]: [action.eventDesc],
              }
            }
          }
        };
      } else if (state.events[selectedDayYear][selectedDayMonth] === undefined) {
          return { ...state, events: { ...state.events, [selectedDayYear]: { ...state.events[selectedDayYear],
              [selectedDayMonth]: {
                [selectedDayDate]: [action.eventDesc]  
                }            
              }
            }
          };
        } else if (state.events[selectedDayYear][selectedDayMonth][selectedDayDate] === undefined) {
            return { ...state, events: { ...state.events, [selectedDayYear]: { ...state.events[selectedDayYear],
                [selectedDayMonth] : { ...state.events[selectedDayYear][selectedDayMonth],
                    [selectedDayDate] : [action.eventDesc]
                  }
                }
              }
            };
          }
      return { ...state, events: { ...state.events, [selectedDayYear]: { ...state.events[selectedDayYear],
        [selectedDayMonth] : { ...state.events[selectedDayYear][selectedDayMonth],
            [selectedDayDate] :  [...state.events[selectedDayYear][selectedDayMonth][selectedDayDate], action.eventDesc]
          }
        }
      }
      }; 
    default:
      return state;
  }
};
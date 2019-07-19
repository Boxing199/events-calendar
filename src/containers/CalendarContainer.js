import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';
import { 
  getNextMonth,
  getPrevMonth,
  getThisMonth,
  openWindow,
  getSelectedDay,
} from '../actions/index';

const mapStateToProps = state => ({
  today: state.today,
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
});
const mapDispatchToProps = {
  getNextMonth,
  getPrevMonth,
  getThisMonth,
  openWindow,
  getSelectedDay,
};
export const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainer;

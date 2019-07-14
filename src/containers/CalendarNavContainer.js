import { connect } from 'react-redux';
import CalendarNav from '../components/CalendarNav/CalendarNav';
import { 
  getNextMonth,
  getPrevMonth,
  getThisMonth,
} from '../actions/index';
const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  getNextMonth,
  getPrevMonth,
  getThisMonth,
};
export const CalendarNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarNav);

export default CalendarNavContainer;

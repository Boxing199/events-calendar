import { connect } from 'react-redux';
import CalendarEvent from '../components/CalendarEvent/CalendarEvent';
import { 
  closeWindow,
} from '../actions/index';

const mapStateToProps = state => ({
  eventWindow: state.eventWindow,
});
const mapDispatchToProps = {
  closeWindow,
};
export const CalendarEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarEvent);

export default CalendarEventContainer;

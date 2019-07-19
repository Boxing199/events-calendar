import { connect } from 'react-redux';
import CalendarEvent from '../components/CalendarEvent/CalendarEvent';
import { 
  closeWindow,
  saveEvent,
} from '../actions/index';

const mapStateToProps = state => ({
  eventWindow: state.eventWindow,
  events: state.events,
  selectedDay: state.selectedDay,
});
const mapDispatchToProps = {
  closeWindow,
  saveEvent,
};
export const CalendarEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CalendarEvent);

export default CalendarEventContainer;

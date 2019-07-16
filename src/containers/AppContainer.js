import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = state => ({
  today: state.today,
  currentMonth: state.currentMonth,
  currentYear: state.currentYear,
});

export const AppContainer = connect(
  mapStateToProps,
)(App);

export default AppContainer;

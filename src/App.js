import React from 'react';
import CalendarContainer from './containers/CalendarContainer';
import CalendarNavContainer from './containers/CalendarNavContainer';
import CalendarEventContainer from './containers/CalendarEventContainer';

class App extends React.Component {
  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'Novembe', 'December'];
    return (
      <div className="wrapper">
        <main className="main">
          <div className="content">
            <div className="inner">
              <h2 className="title">{this.props.today.toString().slice(0,16)}</h2>
              <CalendarNavContainer />
              <p className="subtitle">{(this.props.today.getFullYear() === this.props.currentYear) ? months[this.props.currentMonth] : months[this.props.currentMonth] + ' ' + this.props.currentYear}</p>
              <CalendarContainer />
            </div>
          </div>
          <CalendarEventContainer />
        </main>  
      </div>
    );
  }
}

export default App;

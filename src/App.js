import React from 'react';
import CalendarContainer from './containers/CalendarContainer';
import CalendarNavContainer from './containers/CalendarNavContainer'

class App extends React.Component {
  render() {
    const today = this.props.today.toString().slice(0,16);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'Novembe', 'December'];
    return (
      <div className="wrapper">
        <main className="main">
          <div className="content">
            <div className="inner">
              <h2 className="title">{today}</h2>
              <CalendarNavContainer />
              <p className="subtitle">{months[this.props.currentMonth]}</p>
              <CalendarContainer />
            </div>
          </div>
        </main>  
      </div>
    );
  }
}

export default App;

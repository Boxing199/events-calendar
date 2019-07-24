import React from 'react';

class CalendarEvent extends React.Component {
    state = { eventDesc: '' };
    render() {
      const selectedDayYear = (this.props.selectedDay !== null) ?
        this.props.selectedDay.getFullYear() : null;
      const selectedDayMonth = (this.props.selectedDay !== null) ?
        this.props.selectedDay.getMonth() + 1 : null;
      const selectedDayDate = (this.props.selectedDay !== null) ?
        this.props.selectedDay.getDate() : null;
    const clearState = () => {
      this.setState({ eventDesc: ''})
    }
    return (
        <div 
          className={(this.props.eventWindow === "closed") ? 
          "calendar-event-wrap display-none" : "calendar-event-wrap"}
          onClick={(event)=>this.props.closeWindow() && clearState()}  
        >
          <div className="calendar-event" onClick={(event) => event.stopPropagation()}> 
            <input 
              className="calendar-event-input" 
              type="text" 
              placeholder="please enter an event description ..."
              value={this.state.eventDesc}
              onChange={ e => this.setState({ eventDesc: e.target.value })} 
            />
            <h2 className="subtitle calendar-event-subtitle"> Events list</h2>
            <ul className="calendar-event-list">
              {(this.props.events[selectedDayYear]) ? 
                (this.props.events[selectedDayYear][selectedDayMonth]) ? 
                  (this.props.events[selectedDayYear][selectedDayMonth][selectedDayDate]) ? 
                    this.props.events[selectedDayYear][selectedDayMonth][selectedDayDate].map((event, index) => (
                    <li 
                      className="calendar-event-list-item"
                      key={index}  
                    >
                      {event}
                    </li>
              )) : null : null : null}
            </ul>
            <nav className="calendar-nav">
              <button 
                className="calendar-nav-btn"
                onClick={()=>this.props.closeWindow() && clearState()}  
              >
                &#215; cancel
              </button>
              <button 
                className="calendar-nav-btn"
                onClick={(this.state.eventDesc !== '') ?
                  () => (this.props.saveEvent(this.state.eventDesc) &&
                    this.props.closeWindow() && clearState()) : null}
              >
                &#10003; save
              </button>
            </nav>        
          </div> 
        </div>
        );
    }
}

export default CalendarEvent;
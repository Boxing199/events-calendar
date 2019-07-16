import React from 'react';

class CalendarEvent extends React.Component {
    render() {
    return (
        <div className={(this.props.eventWindow === "closed") ? "calendar-event-wrap display-none" : "calendar-event-wrap"}>
            <div className="calendar-event"> 
            <input className="calendar-event-input" type="text" placeholder="please enter an event description ..." />
                <h2 className="subtitle calendar-event-subtitle"> Events list</h2>
                <ul className="calendar-event-list">
                </ul>
                <nav className="calendar-nav">
                    <button 
                      className="calendar-nav-btn"
                      onClick={()=>this.props.closeWindow()}  
                    >&#215; cancel</button>
                    <button className="calendar-nav-btn">&#10003; save</button>
                </nav>        
            </div> 
        </div>
        );
    }
}

export default CalendarEvent;
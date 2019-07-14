import React from 'react';

class Calendar extends React.Component {
  render() {
    const today = this.props.today;
    const currentMonth = this.props.currentMonth;
    const currentYear = this.props.currentYear;
    const startCurrentMonth = new Date(currentYear, currentMonth);
    const endCurrentMonth = new Date(currentYear, currentMonth+1, 0);
    const lastDate = endCurrentMonth.getDate();
    const currentMonthDays = [];
    const emptyBlocks = [];
    for (let i = 1; i < getDay(startCurrentMonth); i++) {
      emptyBlocks.push('');
    };
    for (let i = 1; i<=lastDate; i++) {
      currentMonthDays.push(new Date(currentYear, currentMonth, i))
    };
    function getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;
        return day;
    }
  return (
      <div id="calendar">
        <div className="weekDay">пн</div>
        <div className="weekDay">вт</div>
        <div className="weekDay">ср</div>
        <div className="weekDay">чт</div>
        <div className="weekDay">пт</div>
        <div className="weekDay">сб</div>
        <div className="weekDay">вс</div>
        {emptyBlocks.map((block, index)=>(
          <div 
            className="empty" 
            key={index}
          >
            {block}
          </div>
        ))}
        {currentMonthDays.map((monthDay, index) => (
          <div 
            key={index}
            className={(monthDay.getDate() === today.getDate()) ? 'day currentDay' : 'day'}
          >
            <span 
              className={(monthDay.getDate() === today.getDate()) ? 'date currentDate' : 'date'}
            >
              {monthDay.getDate()}
            </span>
          </div>
        ))}
      </div>
  );
  }
}

export default Calendar;
/*
  do css wala part.
  now on handleTomorrow( )=> its other functionality 
  how t



*/


import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./Reminder.css";

import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import { MdCancel } from "react-icons/md";

function Reminder() {
  const [value, setValue] = useState(new Date()); // value is date
  const [msg, setMsg] = useState(""); //msg set for backend 
  const [selectedTime, setSelectedTime] = useState("20:00"); // Initial value is 8:00 PM
  

  const handleToday = () => {
    // Set the date to today
    const today = new Date();

    // Parse the time from the selectedTime string
    const [hours, minutes] = selectedTime.split(':').map(Number);

    // Set the time for today
    today.setHours(hours, minutes, 0, 0);

    console.log(today); // This will log the full date with the selected time
  };

  useEffect(() => {
    handleToday();
  }, [selectedTime]);

  const handleTomorrow = () => {
    // Set the date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  
    // Parse the time from the selectedTime string
    const [hours, minutes] = selectedTime.split(':').map(Number);
  
    // Set the time for tomorrow
    tomorrow.setHours(hours, minutes, 0, 0);
  
    console.log(tomorrow); // This will log the full date with the selected time for tomorrow
  };

    return (
      <div className="reminder">
        <div className="reminder__header">
          <h1> Reminder:</h1>
          <MdCancel />
        </div>
        <input type="text" className="reminder__input" placeholder="Set Msg" />
        <div className="spliteOfTimeContainer">
          <div className="reminder__spliteOfTime" onClick={handleToday}>
            <div className="reminder__splitOfTimeHeader"> Later Today</div>
            <div>
              <small>
                <input
                  className="reminder_timeInput"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </small>
            </div>
          </div>
        </div>
        <div className="spliteOfTimeContainer">
          <div className="reminder__spliteOfTime" onClick={handleTomorrow}>
            <div className="reminder__splitOfTimeHeader"> Tomorrow</div>
            <div>
              <small>
                <input
                  className="reminder_timeInput"
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
              </small>
            </div>
          </div>
        </div>
        <DateTimePicker onChange={setValue} value={value} />
        <button>Add Reminder</button>
      </div>
    );
}

export default Reminder;

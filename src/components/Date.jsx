import React from "react";

const TodayDate = () => {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var day = days[new Date().getDay()];
  var month = months[new Date().getMonth()];
  var date = new Date().getDate();

  return (
    <h2 className='date'>
      {day}, {month} {date}
    </h2>
  );
};

export default TodayDate;

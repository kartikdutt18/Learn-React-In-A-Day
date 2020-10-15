import React from 'react'

function List() {
  const firstName = "Kartik"
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <div>
      <p style={styles}>Good {timeOfDay}!</p>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
      <p>I have a bike, {firstName} :p</p>
    </div>);
}

export default List;
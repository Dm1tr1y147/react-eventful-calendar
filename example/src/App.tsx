import React from "react";
import Calendar from "react-eventful-calendar";

import events from './events.json'

function App() {
  return (
    <div className="App">
      <Calendar eventList={events} />
    </div>
  );
}

export default App;

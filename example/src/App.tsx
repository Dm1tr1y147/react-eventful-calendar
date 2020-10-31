import React from 'react'
import Calendar, { Viewers } from 'react-eventful-calendar'

import events from './events.json'
import locale from './locale.json'

function App() {
  return (
    <div className="App">
      <Calendar
        eventList={events}
        locale={locale}
        initialViewer={Viewers.MonthViewer}
      />
    </div>
  )
}

export default App

import React from 'react'
import { CalendarProvider as CalendarContextProvider } from './context'

const Calendar: React.FC = () => {
  return (
    <CalendarContextProvider>
      <div></div>
    </CalendarContextProvider>
  )
}

export default Calendar

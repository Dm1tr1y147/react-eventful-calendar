import React from 'react'
import CalendarInContext from './CalendarInContext'
import { CalendarProvider as CalendarContextProvider } from './context'
import { ICalendarProps } from './types'

const Calendar: React.FC<ICalendarProps> = ({ eventList }) => {
  return (
    <CalendarContextProvider>
      <CalendarInContext eventList={eventList} />
    </CalendarContextProvider>
  )
}

export default Calendar

import React from 'react'
import CalendarInContext from './CalendarInContext'
import { CalendarProvider as CalendarContextProvider } from './context/calendar'
import { ICalendarProps } from './types'
import { LocaleProvider as LocaleContextProvider } from './context/locale'

const Calendar: React.FC<ICalendarProps> = ({
  eventList,
  initialViewer,
  locale: { monthNames, weekdaysNames },
}) => {
  return (
    <CalendarContextProvider
      eventList={eventList}
      initialViewer={initialViewer}
    >
      <LocaleContextProvider monthList={monthNames} weekList={weekdaysNames}>
        <CalendarInContext />
      </LocaleContextProvider>
    </CalendarContextProvider>
  )
}

export { Viewers } from './types'

export default Calendar

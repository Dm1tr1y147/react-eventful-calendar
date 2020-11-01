/** @module react-eventful-calendar */

import React from 'react'

import CalendarInContext from './CalendarInContext'
import { CalendarProvider as CalendarContextProvider } from './context/calendar'
import { ICalendarProps } from './types'
import { LocaleProvider as LocaleContextProvider } from './context/locale'

/**
 * Calendar component
 *
 * @component
 *
 * @param eventList - List of events
 * @param initialViewer - View which should be showen on first component mount
 * @param locale - object containing two arrays: list of days of week and list of months
 */
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

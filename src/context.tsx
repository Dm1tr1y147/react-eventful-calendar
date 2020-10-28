import React, { createContext, useEffect, useState } from 'react'

import { CalendarContextStateT, CalendarContextT } from './types'
import { getCurrentMonth } from './utils'

const initialCalendarContextState: CalendarContextStateT = {
  month: {
    number: 1,
    firstDayOfWeek: 1,
    lastDayOfWeek: 1,
    numberOfDays: 1,
    previousMonthLength: 1,
  },
  year: 1,
  day: 1,
}

const CalendarContext = createContext<CalendarContextT>({
  state: initialCalendarContextState,
})

const CalendarProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CalendarContextStateT>(
    initialCalendarContextState
  )

  const [now] = useState<Date>(new Date())

  useEffect(
    () =>
      setState((prev) => ({
        ...prev,
        month: getCurrentMonth(now),
        year: now.getFullYear(),
        day: now.getDate(),
      })),
    []
  )

  return (
    <CalendarContext.Provider value={{ state, setState }}>
      {children}
    </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }

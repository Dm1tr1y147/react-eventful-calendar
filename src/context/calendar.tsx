import React, { createContext, useEffect, useMemo, useState } from 'react'

import {
  CalendarStateT,
  CalendarContextT,
  ICalendarProviderProps,
} from './types'
import { Viewers } from '../types'
import { getMonth } from '../utils'

const initialCalendarContextState: CalendarStateT = {
  month: {
    number: 1,
    firstDayOfWeek: 0,
    lastDayOfWeek: 1,
    numberOfDays: 1,
    previousMonthLength: 1,
  },
  year: 1,
  day: {
    number: 1,
  },
  today: {
    day: 1,
    month: 1,
    year: 1,
  },
  eventList: [],
  currentViewer: Viewers.MonthViewer,
}

const CalendarContext = createContext<CalendarContextT | null>(null)

const CalendarProvider: React.FC<ICalendarProviderProps> = ({
  children,
  eventList,
  initialViewer,
}) => {
  const [state, setState] = useState<CalendarStateT>(
    initialCalendarContextState
  )

  const [now] = useState<Date>(new Date())

  useEffect(
    () =>
      setState((prev) => ({
        ...prev,
        year: now.getFullYear(),
        month: getMonth(now),
        day: {
          number: now.getDate(),
        },
        today: {
          day: now.getDate(),
          month: now.getMonth(),
          year: now.getFullYear(),
        },
        currentViewer: initialViewer,
        eventList,
      })),
    []
  )

  const value = useMemo(() => ({ state, setState }), [state])

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  )
}

export { CalendarContext, CalendarProvider }

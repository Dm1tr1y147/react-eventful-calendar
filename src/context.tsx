import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

type CalendarContextStateT = {
  month: number
  year: number
  firstDayOfMonth: number
  lastDayOfMonth: number
  numberOfDays: number
}

type CalendarContextT = {
  state: CalendarContextStateT
  setState?: Dispatch<SetStateAction<CalendarContextStateT>>
}

const initialCalendarContextState: CalendarContextStateT = {
  month: 1,
  year: 1,
  firstDayOfMonth: 0,
  lastDayOfMonth: 0,
  numberOfDays: 0,
}

export const CalendarContext = createContext<CalendarContextT>({
  state: initialCalendarContextState,
})

export const CalendarProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CalendarContextStateT>(
    initialCalendarContextState
  )

  return (
    <CalendarContext.Provider value={{ state, setState }}>
      {children}
    </CalendarContext.Provider>
  )
}

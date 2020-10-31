import { useContext } from 'react'
import { CalendarContext } from './context/calendar'
import { LocaleContext } from './context/locale'

const useCalendarContext = () => {
  const context = useContext(CalendarContext)

  if (!context)
    throw new Error("Can't use calendar context outside of CalendarProvider")

  return context
}

const useLocaleContext = () => {
  const context = useContext(LocaleContext)

  if (!context)
    throw new Error("Can't use locale context outside of LocaleProvider")

  return context
}

export { useCalendarContext, useLocaleContext }

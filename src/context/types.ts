import { Dispatch, SetStateAction } from 'react'
import { EventT, Viewers } from '../types'

// Calendar

export type CalendarStateT = {
  month: MonthContextT
  year: number
  day: {
    number: number
    events?: EventT[]
  }
  today: {
    day: number
    month: number
    year: number
  }
  eventList: EventT[]
  currentViewer: Viewers
}

export type MonthContextT = {
  number: number
  firstDayOfWeek: number
  lastDayOfWeek: number
  numberOfDays: number
  previousMonthLength: number
}

export type CalendarContextSetterT = Dispatch<SetStateAction<CalendarStateT>>

export type CalendarContextT = {
  state: CalendarStateT
  setState?: CalendarContextSetterT
}

export interface ICalendarProviderProps {
  eventList: EventT[]
  initialViewer: Viewers
}

// localization

export type LocaleStateT = {
  weekdaysNames: string[]
  monthNames: string[]
}

export type LocaleContextSetterT = Dispatch<SetStateAction<LocaleStateT>>

export type LocaleContextT = {
  state: LocaleStateT
  setState?: LocaleContextSetterT
}

export interface ILocaleProviderProps {
  weekList: string[]
  monthList: string[]
}

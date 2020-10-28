import { Dispatch, SetStateAction } from 'react'

// Context

export type CalendarContextStateT = {
  month: MonthContextT
  year: number
  day: number
}

export type MonthContextT = {
  number: number
  firstDayOfWeek: number
  lastDayOfWeek: number
  numberOfDays: number
  previousMonthLength: number
}

export type CalendarContextT = {
  state: CalendarContextStateT
  setState?: Dispatch<SetStateAction<CalendarContextStateT>>
}

// Calendar component

export interface ICalendarProps {
  eventList: EventT[]
}

// Day

export type DayT = {
  number: number
  events: EventT[]
}

export interface IDayProps {
  dayNumber: number
  events: EventT[]
  shaded: boolean
}

// Event

export type EventT = {
  id: number
  title: string
  startDate: string
  endDate: string
}

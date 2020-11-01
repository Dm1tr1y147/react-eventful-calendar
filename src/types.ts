import { Dispatch, SetStateAction } from 'react'
import { CalendarStateT, LocaleStateT, MonthContextT } from './context/types'

// Experimental

export type switchMonthInContextFT = (
  setContext: Dispatch<SetStateAction<CalendarStateT>> | undefined,
  increase: boolean
) => void

export type UseCalendarSwitchFT = () => (increase: boolean) => void

// Calendar component

/**
 * Enum for calendar views
 * @readonly
 * @enum {number}
 */
export enum Viewers {
  /** Month view */
  MonthViewer,
  /** Single day view */
  DayViewer,
}

export interface ICalendarProps {
  eventList: EventT[]
  initialViewer: Viewers
  locale: LocaleStateT
}

// Day

export type DayT = {
  number: number
  events: EventT[]
}

export type ShouldDayBeShadedFT = (
  month: MonthContextT,
  dayIndex: number
) => boolean

export type FilterEventsByDayFT = (
  eventList: EventT[],
  dayNumber: number,
  monthNumber: number,
  yearNumber: number
) => EventT[]

export type SetDayFT = (
  dayNumber: number,
  dayEvents: EventT[],
  setState: Dispatch<SetStateAction<CalendarStateT>> | undefined
) => void

// Event

export type EventT = {
  id: number
  title: string
  startDate: string
  endDate: string
  color: string
}

export type GetEventLengthFT = (start: string, end: string) => string

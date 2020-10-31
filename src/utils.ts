import { MonthContextT } from './context/types'
import {
  FilterEventsByDayFT,
  GetEventLengthFT,
  SetDayFT,
  ShouldDayBeShadedFT,
  switchMonthInContextFT,
} from './types'

const getMonth = (date: Date): MonthContextT => {
  const monthInfo = getMonthInfo(date.getFullYear(), date.getMonth())

  return {
    number: date.getMonth(),
    ...monthInfo,
  }
}

const getMonthInfo = (
  year: number,
  month: number
): Omit<MonthContextT, 'number'> => {
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const prevMonth = new Date(year, month, 0)

  const firstDayOfWeek = firstDayOfMonth.getDay()

  const convertedFirstDayOfWeek =
    firstDayOfWeek - 1 >= 0 ? firstDayOfWeek - 1 : 6

  return {
    firstDayOfWeek: convertedFirstDayOfWeek,
    lastDayOfWeek: lastDayOfMonth.getDay(),
    numberOfDays: lastDayOfMonth.getDate(),
    previousMonthLength: prevMonth.getDate(),
  }
}

const getMonthName = (number: number, monthNames: string[]) =>
  monthNames[number]

const switchMonthInContext: switchMonthInContextFT = (setContext, increase) => {
  if (!setContext) return

  setContext((previousContext) => {
    const newDate = new Date(
      previousContext.year,
      previousContext.month.number,
      1
    )

    if (increase) newDate.setMonth(newDate.getMonth() + 1)
    else newDate.setMonth(newDate.getMonth() - 1)

    return {
      ...previousContext,
      year: newDate.getFullYear(),
      month: getMonth(newDate),
    }
  })
}

const shouldDayBeShaded: ShouldDayBeShadedFT = (month, dayIndex) =>
  dayIndex < month.firstDayOfWeek ||
  dayIndex > month.numberOfDays + month.firstDayOfWeek - 1

const filterEventsByDay: FilterEventsByDayFT = (
  eventList,
  dayNumber,
  monthNumber,
  yearnumber
) =>
  eventList.filter((event) => {
    const eventDate = new Date(event.startDate)

    return (
      eventDate.getDate() == dayNumber &&
      eventDate.getMonth() == monthNumber &&
      eventDate.getFullYear() == yearnumber
    )
  })

const setDay: SetDayFT = (dayNumber, dayEvents, setState) => {
  if (setState)
    setState((prevState) => ({
      ...prevState,
      day: {
        ...prevState.day,
        number: dayNumber,
        events: dayEvents,
      },
    }))
}

const getEventLength: GetEventLengthFT = (start, end) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  if ((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24) >= 1)
    return 'Whole day'
  const startMinutes = startDate.getMinutes().toString()
  const endMinutes = endDate.getMinutes().toString()

  return `${startDate.getHours()}:${
    startMinutes.length < 2 ? '0' + startMinutes : startMinutes
  }-${endDate.getHours()}:${
    endMinutes.length < 2 ? '0' + endMinutes : endMinutes
  }`
}

export {
  getMonth,
  getMonthName,
  switchMonthInContext,
  shouldDayBeShaded,
  filterEventsByDay,
  setDay,
  getEventLength,
}

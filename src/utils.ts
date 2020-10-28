import { MonthContextT } from './types'

const getCurrentMonth = (currentDay: Date): MonthContextT => {
  const monthInfo = getMonthInfo(
    currentDay.getFullYear(),
    currentDay.getMonth()
  )

  return {
    number: currentDay.getMonth(),
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

  return {
    firstDayOfWeek: firstDayOfMonth.getDay(),
    lastDayOfWeek: lastDayOfMonth.getDay(),
    numberOfDays: lastDayOfMonth.getDate(),
    previousMonthLength: prevMonth.getDate(),
  }
}

export { getCurrentMonth, getMonthInfo }

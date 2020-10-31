import React, { useEffect, useState } from 'react'
import { useCalendarContext } from '../hooks'
import { DayT } from '../types'
import { filterEventsByDay, shouldDayBeShaded } from '../utils'
import DayOfMonth from './DayOfMonth'
import MonthHeader from './MonthHeader'
import styles from './styles'

const MonthView: React.FC = () => {
  const {
    state: { month, eventList, year: yearNumber },
  } = useCalendarContext()

  const [monthDays, setMonthDaysState] = useState<DayT[]>([])

  useEffect(() => {
    const daysNumbersArray = [
      Array.from(
        // Array(month.firstDayOfWeek - 1 > 0 ? month.firstDayOfWeek - 1 : 0)
        Array(month.firstDayOfWeek)
      ).map(
        (_, index) =>
          month.previousMonthLength - month.firstDayOfWeek + index + 1
      ),
      Array.from(Array(month.numberOfDays)).map((_, index) => index + 1),
      Array.from(Array(7 - month.lastDayOfWeek)).map((_, index) => index + 1),
    ]

    const monthNumber = month.number

    setMonthDaysState(
      daysNumbersArray.flatMap((month, index) =>
        month.map<DayT>((dayNumber) => ({
          number: dayNumber,
          events:
            index == 1
              ? filterEventsByDay(eventList, dayNumber, monthNumber, yearNumber)
              : [],
        }))
      )
    )
  }, [month, eventList])

  return (
    <>
      <MonthHeader />
      <div style={styles.monthGrid}>
        {monthDays.map((day, dayIndex) => (
          <DayOfMonth
            key={dayIndex}
            dayNumber={day.number}
            events={day.events}
            shaded={shouldDayBeShaded(month, dayIndex)}
          />
        ))}
      </div>
    </>
  )
}

export default MonthView

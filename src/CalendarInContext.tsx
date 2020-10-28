import React, { useContext, useEffect, useState } from 'react'

import Day from './Day'
import { CalendarContext } from './context'
import { DayT, ICalendarProps } from './types'

const CalendarInContext: React.FC<ICalendarProps> = ({ eventList }) => {
  const context = useContext(CalendarContext)

  const { month } = context.state

  const [monthDaysState, setMonthDaysState] = useState<DayT[]>([])

  useEffect(() => {
    const daysNumbersArray = [
      Array.from(
        Array(month.firstDayOfWeek - 1 > 0 ? month.firstDayOfWeek - 1 : 0)
      ).map(
        (_, index) =>
          month.previousMonthLength - month.firstDayOfWeek + index + 2
      ),
      Array.from(Array(month.numberOfDays)).map((_, index) => index + 1),
      Array.from(Array(7 - month.lastDayOfWeek)).map((_, index) => index + 1),
    ]

    setMonthDaysState(
      daysNumbersArray.flatMap((month, index) =>
        month.map<DayT>((dayNumber) => ({
          number: dayNumber,
          events: eventList.filter((event) => {
            if (index != 1) return false

            const eventDate = new Date(event.startDate)

            return (
              eventDate.getDate() == dayNumber &&
              eventDate.getMonth() == context.state.month.number
            )
          }),
        }))
      )
    )
  }, [context.state])

  return (
    <div>
      {monthDaysState.map((day, dayIndex) => (
        <Day
          key={dayIndex}
          dayNumber={day.number}
          events={day.events}
          shaded={
            dayIndex < month.firstDayOfWeek - 1 ||
            dayIndex > month.numberOfDays + month.firstDayOfWeek - 2
          }
        />
      ))}
    </div>
  )
}

export default CalendarInContext

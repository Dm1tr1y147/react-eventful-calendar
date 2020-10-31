import React from 'react'
import { useCalendarContext, useLocaleContext } from '../hooks'
import { getMonthName, switchMonthInContext } from '../utils'
import styles from './styles'

const MonthHeader: React.FC = () => {
  const {
    state: { weekdaysNames, monthNames },
  } = useLocaleContext()

  const {
    state: {
      year,
      month: { number },
    },
    setState,
  } = useCalendarContext()

  return (
    <header>
      <div style={styles.monthSwitchHeader}>
        <button
          title={getMonthName(number - 1, monthNames)}
          onClick={() => switchMonthInContext(setState, false)}
          style={styles.switchMonthButton}
        >
          &lt;
        </button>
        <h4 style={styles.monthSwitchHeaderTitle}>
          {getMonthName(number, monthNames) + ' ' + year}
        </h4>
        <button
          title={getMonthName(number + 1, monthNames)}
          onClick={() => switchMonthInContext(setState, true)}
          style={styles.switchMonthButton}
        >
          &gt;
        </button>
      </div>

      <div style={styles.weekdaysListHeader}>
        {weekdaysNames.map((weekDay, weekDayIndex) => (
          <p key={weekDayIndex} style={styles.weekDay}>
            {weekDay}
          </p>
        ))}
      </div>
    </header>
  )
}

export default MonthHeader

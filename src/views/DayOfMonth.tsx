import React, { useState } from 'react'
import { useCalendarContext } from '../hooks'
import { Viewers } from '../types'
import { setDay } from '../utils'

import { IDayOfMonthProps } from './types'
import styles from './styles'

const ArrowDown: React.FC = () => (
  <svg
    width="11"
    height="20"
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#000000">
      <path d="M0 1.132L1.29663 0L5.50183 3.7356L9.70337 0L11 1.132L5.50183 6L0 1.132Z" />
    </g>
  </svg>
)

const DayOfMonth: React.FC<IDayOfMonthProps> = ({
  dayNumber,
  events,
  shaded,
}) => {
  const { setState } = useCalendarContext()

  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    if (shaded) return
    if (events.length > 2 && !expanded) return setExpanded(true)
    setDay(dayNumber, events, setState)
    if (setState)
      setState((prevState) => ({
        ...prevState,
        currentViewer: Viewers.DayViewer,
      }))
  }

  return (
    <div
      style={{
        ...styles.dayOfMonth,
        opacity: shaded ? '0.5' : '1',
        maxHeight: expanded ? '100vh' : '5rem',
      }}
      onClick={handleClick}
    >
      <h5 style={styles.monthDayNumber}>{dayNumber}</h5>
      <ul style={styles.monthDayEventList}>
        {events.map((event, key) => (
          <li
            key={key}
            style={{ ...styles.monthDayEvent, backgroundColor: event.color }}
          >
            {event.title}
          </li>
        ))}
      </ul>
      {events.length > 2 ? (
        <div
          style={{
            ...styles.monthDayBottomShade,
            height: expanded ? '0px' : '50%',
          }}
        >
          <ArrowDown />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default DayOfMonth

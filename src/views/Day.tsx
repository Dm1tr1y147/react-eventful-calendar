import React, { useEffect } from 'react'
import { useCalendarContext, useLocaleContext } from '../hooks'
import { Viewers } from '../types'
import { getEventLength, getMonthName } from '../utils'
import styles from './styles'

import { IDayViewer } from './types'

const HomeIcon = () => (
  <svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#FFFFFF">
      <path d="M11.5 5.21591L20.125 13.2268V22H14.375V16.2609H8.625V22H2.875V13.2268L11.5 5.21591ZM23 10.6633L11.5 0L0 10.649L1.30429 12.0503L11.5 2.6113L21.6957 12.0646L23 10.6633Z"></path>
    </g>
  </svg>
)

const DayViewer: React.FC<IDayViewer> = () => {
  const {
    state: { day, month, year },
    setState,
  } = useCalendarContext()
  const {
    state: { monthNames },
  } = useLocaleContext()

  useEffect(() => {
    if (setState)
      if (day.events === undefined) {
        setState((prevState) => ({
          ...prevState,
          day: {
            ...prevState.day,
            events: prevState.eventList.filter(() => false),
          },
        }))
      }
  }, [day.number])

  const handle = () => {
    if (setState)
      setState((prevSate) => ({
        ...prevSate,
        currentViewer: Viewers.MonthViewer,
      }))
  }

  return (
    <>
      <div style={styles.dayHeader}>
        <button
          title="Return to main"
          onClick={handle}
          style={{ ...styles.zeroMP, ...styles.dayHomeButton }}
        >
          <HomeIcon />
        </button>
        <div style={styles.dayDateBlock}>
          <h1 style={styles.zeroMP}>{day.number}</h1>
          <h3 style={styles.zeroMP}>
            {getMonthName(month.number, monthNames) + ' ' + year}
          </h3>
        </div>
      </div>
      <ul>
        {day.events?.map((event, eventIndex) => (
          <li key={eventIndex}>
            <h2>{event.title}</h2>
            <h3>{getEventLength(event.startDate, event.endDate)}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default DayViewer

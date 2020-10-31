import React from 'react'

import { useCalendarContext } from './hooks'
import { Viewers } from './types'
import { DayView, MonthView } from './views'
import styles from './views/styles'

const CalendarInContext: React.FC = () => {
  const { state: calendar } = useCalendarContext()
  const { currentViewer } = calendar

  return (
    <div style={styles.calendar}>
      {currentViewer == Viewers.MonthViewer && <MonthView />}
      {currentViewer == Viewers.DayViewer && <DayView />}
    </div>
  )
}

export default CalendarInContext

import React from 'react'

import { IDayProps } from './types'

const Day: React.FC<IDayProps> = ({ dayNumber, events, shaded }) => {
  return (
    <div style={shaded ? { background: '#EEEEEE' } : {}}>
      <h6>{dayNumber}</h6>
      <ul>
        {events.map((event, key) => (
          <li key={key}>{event.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Day

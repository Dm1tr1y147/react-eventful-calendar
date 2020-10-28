import React from 'react'

import { IDayProps } from './types'

const Day: React.FC<IDayProps> = ({ dayNumber, events, shaded }) => {
  return (
    <div
      style={{
        background: '#EEEEEE',
        borderRadius: '5px',
        maxHeight: '100px',
        overflow: 'hidden',
        padding: '5px',
        position: 'relative',
        opacity: shaded ? '0.5' : '1',
      }}
    >
      <h5
        style={{
          textAlign: 'center',
          margin: '0px',
        }}
      >
        {dayNumber}
      </h5>
      <ul style={{ paddingLeft: '20px', margin: '0' }}>
        {events.map((event, key) => (
          <li key={key} style={{}}>
            {event.title}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: 'absolute',
          bottom: '0px',
          marginLeft: '-5px',
          width: '100%',
          height: '50%',
          display: 'block',
          backgroundImage: 'linear-gradient(transparent, #EEEEEE)',
        }}
      />
    </div>
  )
}

export default Day

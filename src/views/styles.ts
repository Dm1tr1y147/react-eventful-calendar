type Style = React.CSSProperties

const calendar: Style = {
  height: '100%',
  width: '100%',
  border: '1px black solid',
  borderRadius: '5px',
  overflow: 'hidden',
}

// Month header

const weekdaysListHeader: Style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
  gap: '5px',
}

const monthSwitchHeader: Style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
  gap: '5px',
  backgroundColor: 'black',
  color: 'white',
  padding: '5px',
}

const switchMonthButton: Style = {
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
}

const monthSwitchHeaderTitle: Style = {
  margin: '0px',
  textAlign: 'center',
  textTransform: 'capitalize',
  gridColumn: 'span 5',
}

const weekDay: Style = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  padding: '5px 0',
  margin: '0px',
  textTransform: 'capitalize',
}

// Month viewer

const monthGrid: Style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '5px',
  padding: '5px',
}

// Month day

const dayOfMonth: Style = {
  background: '#EEEEEE',
  borderRadius: '5px',
  overflow: 'hidden',
  minHeight: '5rem',
  padding: '5px',
  position: 'relative',
  transition: 'all 3s',
}

const monthDayEventList: Style = {
  padding: '0px',
  margin: '0px',
  listStyle: 'none',
  overflow: 'hidden',
  borderRadius: '4px',
}

const monthDayEvent: Style = {
  padding: '2px',
}

const monthDayBottomShade: Style = {
  position: 'absolute',
  bottom: '0px',
  marginLeft: '-5px',
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(transparent, #EEEEEE)',
}

const monthDayNumber: Style = {
  textAlign: 'center',
  margin: '0px',
}

const styles = {
  switchMonthButton,
  calendar,
  weekdaysListHeader,
  monthSwitchHeader,
  monthSwitchHeaderTitle,
  weekDay,
  monthGrid,
  dayOfMonth,
  monthDayEventList,
  monthDayEvent,
  monthDayBottomShade,
  monthDayNumber,
}

export default styles

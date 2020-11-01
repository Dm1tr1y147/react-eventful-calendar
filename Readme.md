# React-eventful-calendar

It is a React calendar component with events support. It can show events by day in month view and by time in day view.

# Usage example

```jsx
import Calendar, { Viewers } from "react-eventful-calendar"
// ...
<Calendar
  eventList={events}
  locale={locale}
  initialViewer={Viewers.MonthViewer}
/>
// ...
```

### Events

`events` is an array of objects of the following type:

```typescript
type EventT = {
  id: number
  title: string
  startDate: string
  endDate: string
  color: string
}
```

For example:
```javascript
const events = [
  {
    id: 1,
    title: "Test",
    startDate: "Wed Oct 22 2020 17:00:00 GMT+0500 (Yekaterinburg Standard Time)",
    endDate: "Wed Oct 22 2020 20:00:00 GMT+0500 (Yekaterinburg Standard Time)",
    color: "#e57373"
  },
]
```

### Locale

`locale` is an object containing arrays of strings. `monthNames` and `weekdaysNames` are currently supported. Strings in array should be in lowercase. For example:
```javascript
const locale = {
  monthNames: [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ],
  weekdaysNames: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
}
```

### Viewers

`Viewers` is an enum, which contains supported calendar viewers. Definition:
```typescript
enum Viewers {
  MonthViewer, // Month view
  DayViewer, // Single day view
}
```
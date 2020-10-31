import React, { createContext, useEffect, useMemo, useState } from 'react'
import { ILocaleProviderProps, LocaleContextT, LocaleStateT } from './types'

const initialLocaleState: LocaleStateT = {
  monthNames: [],
  weekdaysNames: [],
}

const LocaleContext = createContext<LocaleContextT | null>(null)

const LocaleProvider: React.FC<ILocaleProviderProps> = ({
  children,
  monthList,
  weekList,
}) => {
  const [state, setState] = useState<LocaleStateT>(initialLocaleState)

  useEffect(() => {
    setState({
      monthNames: monthList,
      weekdaysNames: weekList,
    })
  }, [monthList, weekList])

  const value = useMemo(() => ({ state, setState }), [state])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export { LocaleContext, LocaleProvider }

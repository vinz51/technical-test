import { createContext, ReactNode, ReactChild, ReactChildren, useCallback, useMemo, useState } from 'react';
import moment from 'moment';

interface WeeksContextData {
  daysOfWeek: any[];
}

interface ProviderProps {
  children: ReactNode | ReactNode[] | ReactChild | ReactChild[] | ReactChildren | ReactChildren[] | string;
}

const WeeksContext = createContext<WeeksContextData | null>(null);

export const WeeksProvider = ({ children }: ProviderProps) => {
  const todayWeekNumber = moment().week();
  const todayDayNumber = moment().day();

  const [currentWeekNumber, setCurrentWeekNumber] = useState(todayWeekNumber);

  const rendersDaysofWeeks = useMemo(() => {
    return [
      moment().weekday(1),
      moment().weekday(2),
      moment().weekday(3),
      moment().weekday(4),
      moment().weekday(5),
      moment().weekday(6),
      moment().weekday(7),
    ]
  }, [currentWeekNumber]);

  const value: WeeksContextData = {
    daysOfWeek: rendersDaysofWeeks,
  };

  return (<WeeksContext.Provider value={value}>
    {children}
  </WeeksContext.Provider>);
}

export default WeeksContext;

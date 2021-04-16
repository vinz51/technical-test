import styles from '../../styles/table.module.css';
import classNames from 'classnames';
import { useContext } from 'react';

import WeeksContext from '../../contexts/weeks';

const HeaderDays = () => {
  const { daysOfWeek } = useContext(WeeksContext);

  return daysOfWeek.map((day) => (<th
    className={classNames(styles.th, styles.weekday)}
    key={`day-${day.weekday()}`}
  >
    {day.format('ddd D')}
  </th>));
}

export default HeaderDays;

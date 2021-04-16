import moment from 'moment';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import styles from '../../styles/table.module.css'
import { userShift } from '../../api/reducers/shifts';
import WeeksContext from '../../contexts/weeks';

const CellShift = ({ onClick, userId }) => {
  const shifts = useSelector(userShift(userId))
  const { daysOfWeek } = useContext(WeeksContext);

  const days = {};

  daysOfWeek.forEach((day, indexDay) => {
    days[indexDay] = [];

    shifts.forEach(shift => {
      if (moment(shift.starts_at).format("MM-DD-YYYY") === moment(day).format("MM-DD-YYYY")) {
        days[indexDay].push(shift);
      }
    });
  });

  return Object.keys(days).map((index) => {
    if (!days[index].length) {
      return (<td key={`${userId}-${index}`} style={{ position: 'relative'}}>
        <div className={styles.emptyCell}>
          <button onClick={(event) => onClick(event, {
            userId,
            day: daysOfWeek[index],
          })}>
            <span>+</span>
          </button>
        </div>
      </td>);
    }

    return (<td key={`${userId}-${index}`}>
      {days[index].map((shift) => {
        const betweenTime = moment(shift.ends_at).diff(moment(shift.starts_at), 'hours');

        return (<div className={styles.shift} style={{ backgroundColor: shift.color }} key={`${userId}-${index}-${shift.id}`}>
          <span>
            {moment(shift.starts_at).format("HH:mm")}-{moment(shift.ends_at).format("HH:mm")} ({betweenTime}h)
          </span>
        </div>);
      })}
    </td>);
  });
}

export default CellShift;

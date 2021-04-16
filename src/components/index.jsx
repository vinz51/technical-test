import { useEffect } from 'react';
import styles from '../styles/table.module.css'
import { useDispatch } from 'react-redux';

import HeaderDays from './table/headerDays';
import RowUsersContainer from './table/rowUsersContainer';
import WeeksContext from '../contexts/weeks';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOAD_USERS' });
    dispatch({ type: 'LOAD_SHIFTS' });
  }, [dispatch]);

  return (<div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th} />
          <HeaderDays />
        </tr>
      </thead>
      <tbody>
        <RowUsersContainer />
      </tbody>
    </table>
  </div>);
}

export default App;

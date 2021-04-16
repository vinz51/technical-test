import { useSelector } from 'react-redux';
import { isLoading, users } from '../../api/reducers/users';

import CellShift from './cellShift';
import { getInitials } from '../utils';
import styles from '../../styles/table.module.css';

const RowUsers = (props) => {
  const isUsersLoading = useSelector(isLoading);
  const allUsers = useSelector(users);

  if (isUsersLoading) {
    return (<tr>
      <td className={styles.td} colSpan={7}>
        Users are loading
      </td>
    </tr>);
  }

  if (!allUsers.length) {
    return <tr>
      <td className={styles.td} colSpan={7}>
        Actually no users exist
      </td>
    </tr>;
  }

  return allUsers.map(({ id, name }) => (<tr key={id}>
    <td className={styles.td}>
      <span className={styles.initials}>{getInitials(name)}</span>
      {name}
    </td>
    <CellShift {...props} userId={id} />
  </tr>));
}

export default RowUsers;

import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import styles from '../../../styles/form.module.css'

import { CancelButton, ValidateButton } from '../../buttons';

const Form = ({ userId, day, toggleModal }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    const startsAtTime = data.starts_at.split(":");
    const endsAtTime = data.ends_at.split(":");
    const currentDay = moment(day);

    const datatToSave = {
      ...data,
      user_id: userId,
      starts_at: currentDay.hours(startsAtTime[0]).minutes(startsAtTime[1]).seconds(0).utc().format(),
      ends_at: currentDay.hours(endsAtTime[0]).minutes(endsAtTime[1]).seconds(0).utc().format(),
    };

    if (data.color === "none") {
      delete datatToSave['color'];
    }

    dispatch({ type: 'CREATE_SHIFTS', options: datatToSave });
    toggleModal();
  }

  return (
    <>
      <h2 className={styles.title}>Create a new shift</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="starts">Starting time at:</label>
        <input id="starts" type="time" {...register('starts_at', { required: true })} />
        { errors.starts_at && (<span className={styles.error}>This field is required</span>) }

        <label htmlFor="ends">Ending time at:</label>
        <input id="ends" type="time" {...register('ends_at', { required: true })} />
        { errors.ends_at && (<span className={styles.error}>This field is required</span>) }

        <label htmlFor="color">Choose a color</label>

        <select name="color" id="color" {...register('color')}>
          <option value="none">None</option>
          <option value="#9d1c13">Red</option>
          <option value="#40804b">Green</option>
          <option value="#f8e593">Yellow</option>
        </select>

        <div className={styles.actions}>
          <CancelButton onClick={toggleModal}>
            Cancel
          </CancelButton>

          <ValidateButton type="submit">
            Sauvegarder
          </ValidateButton>
        </div>
      </form>
    </>
  );
}

Form.propTypes = {
  day: PropTypes.instanceOf(moment).isRequired,
  toggleModal: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Form;

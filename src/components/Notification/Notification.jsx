import propTypes from 'prop-types';
import css from './Notification.module.css';

export function Notification({ message }) {
  return <p className={css.message}>{message}</p>;
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;

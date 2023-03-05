import PropsType from 'prop-types';
import { IconContext } from 'react-icons';
import { ImNotification } from 'react-icons/im';
import { NotificationText } from './Notification.styled';
const Notification = ({ message }) => {
  return (
    <NotificationText>
      <span>{message}</span>

      <IconContext.Provider value={{ color: 'orange', size: 35 }}>
        <ImNotification />
      </IconContext.Provider>
    </NotificationText>
  );
};

Notification.propsType = {
  message: PropsType.string.isRequired,
};

export default Notification;

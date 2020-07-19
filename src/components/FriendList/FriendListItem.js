import React from 'react';
import PropTypes from 'prop-types';
import defaultLogo from './userlogo.jpg';
import styles from './FriendList.module.css';

// Не используем, т.к. следуем условию задания
// const FriendListItem = ({ userData }) => (
//   <div>
//     {userData.map(({ id, avatar, name, isOnline }) => (
//       <li key={id} className={styles.listItem}>
//         <span className={isOnline ? styles.green : styles.red}>{isOnline}</span>
//         <img className={styles.avatar} src={avatar} alt={name} width="48" />
//         <p className={styles.name}>{name}</p>
//       </li>
//     ))}
//   </div>
// );

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={styles.listItem}>
    <span className={isOnline ? styles.green : styles.red}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  // avatar: '',
  avatar: defaultLogo,
  name: 'Friends name',
  isOnline: false,
};

FriendListItem.propTypes = {
  // id: PropTypes.number.isRequired, //if use it we have a mistake in a web console(use another way to fix it(look FriendList))
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

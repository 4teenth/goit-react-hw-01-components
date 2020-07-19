import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        // OR id={id} ??
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // avatar: PropTypes.string.isRequired, //don't use it(if you want), cause we wrote this propType in FriendListItem
      // name: PropTypes.string.isRequired, //don't use it(if you want), cause we wrote this propType in FriendListItem
      // isOnline: PropTypes.bool.isRequired, //don't use it(if you want), cause we wrote this propType in FriendListItem
    }),
  ).isRequired,
};

export default FriendList;

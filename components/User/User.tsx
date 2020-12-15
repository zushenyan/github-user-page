import React from 'react';

import styles from './User.module.css';

export type Props = {
  username: string;
  avatarURL: string;
  followers: number;
  following: number;
};

export default function User({
  username,
  avatarURL,
  followers,
  following,
}: Props): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['title-bar']}>
        <img className={styles['avatar']} src={avatarURL} alt="avatar" />
        <div className={styles['name']}>{username}</div>
      </div>
      <div>followers: {followers}</div>
      <div>following: {following}</div>
    </div>
  );
}

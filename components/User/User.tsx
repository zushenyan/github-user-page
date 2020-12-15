import React from 'react';

import styles from './User.module.css';

export type Props = {
  username: string;
  avatarURL: string;
  followers: number;
  following: number;
  repos: {
    name: string;
    url: string;
  }[];
};

export default function User({
  username,
  avatarURL,
  followers,
  following,
  repos,
}: Props): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['title-bar']}>
        <img className={styles['avatar']} src={avatarURL} alt="avatar" />
        <div className={styles['name']}>{username}</div>
      </div>
      <div>followers: {followers}</div>
      <div>following: {following}</div>
      <div className={styles['repos']}>
        {repos.map((r, i) => (
          <a href={r.url} key={i} target="_blank" rel="noreferrer">
            {r.name}
          </a>
        ))}
      </div>
    </div>
  );
}

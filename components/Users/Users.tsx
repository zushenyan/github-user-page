import React from 'react';
import Link from 'next/link';

import styles from './Users.module.css';

interface Item {
  username: string;
  avatarURL: string;
}

export type Props = {
  data: Item[];
};

export default function Users({ data }: Props): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      {data.map((d, i) => (
        <Link href={`/users/${d.username}`} key={`link-${i}`}>
          <a className={styles['anchor']}>
            <img
              className={styles['avatar']}
              src={d.avatarURL}
              alt={d.username}
            />
            <span className={styles['name']}>{d.username}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}

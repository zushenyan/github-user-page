import React from 'react';
import Link from 'next/link';

interface Item {
  username: string;
  avatarURL: string;
}

export type Props = {
  data: Item[];
};

export default function Users({ data }: Props): JSX.Element {
  return (
    <div>
      {data.map((d, i) => (
        <Link href={`/users/${d.username}`} key={`link-${i}`}>
          <a style={{ display: 'block' }}>
            <img
              style={{ display: 'inline', width: '25px', height: '25px' }}
              src={d.avatarURL}
              alt={d.username}
            />
            <span>{d.username}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}

import React from 'react';

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
    <div>
      <h1>{username}</h1>
      <div>
        <img src={avatarURL} alt="avatar" />
      </div>
      <div>followers: {followers}</div>
      <div>following: {following}</div>
    </div>
  );
}

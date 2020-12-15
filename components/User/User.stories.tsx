import React from 'react';
import { Story, Meta } from '@storybook/react';

import User, { Props } from './User';

export default {
  title: 'User',
  component: User,
} as Meta;

const Template: Story<Props> = (args) => <User {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  username: 'foo',
  avatarURL: 'https://via.placeholder.com/150',
  followers: 123,
  following: 456,
  repos: Array.from(Array(10)).map((_, i) => ({
    url: 'https://google.com',
    name: `repo - ${i}`,
  })),
};

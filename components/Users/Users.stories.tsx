import React from 'react';
import { Story, Meta } from '@storybook/react';

import Users, { Props } from './Users';

export default {
  title: 'Users',
  component: Users,
} as Meta;

const Template: Story<Props> = (args) => <Users {...args} />;

const data = Array.from(Array(100).keys()).map((k) => ({
  username: `user - ${k}`,
  avatarURL: 'https://via.placeholder.com/150',
}));

export const Primary = Template.bind({});
Primary.args = {
  inputValue: 'foo',
  pageCount: 50,
  fetchData: () => undefined,
  columns: [
    {
      accessor: 'avatarURL',
      Cell: ({ value }) => <img src={value} />,
    },
    {
      accessor: 'username',
    },
  ],
  data,
};

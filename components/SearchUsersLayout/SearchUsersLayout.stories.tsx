import React from 'react';
import { Story, Meta } from '@storybook/react';

import SearchUsersLayout, { Props } from './SearchUsersLayout';

export default {
  title: 'SearchUsersLayout',
  component: SearchUsersLayout,
} as Meta;

const Template: Story<Props> = (args) => <SearchUsersLayout {...args} />;

const middle = (
  <div style={{ backgroundColor: 'lime', height: '100%' }}>
    {Array.from(Array(50)).map((_, i) => (
      <div key={i}>item - {i}</div>
    ))}
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  top: <div style={{ backgroundColor: 'lightblue' }}>top</div>,
  middle,
  bottom: <div style={{ backgroundColor: 'lightgray' }}>bottom</div>,
};

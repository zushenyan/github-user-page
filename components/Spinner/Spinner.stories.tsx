import React from 'react';
import { Story, Meta } from '@storybook/react';

import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '20px',
  height: '20px',
};

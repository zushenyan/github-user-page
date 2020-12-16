import React from 'react';
import { Story, Meta } from '@storybook/react';

import Theme, { Props } from './Theme';

export default {
  title: 'Theme',
  component: Theme,
} as Meta;

const Template: Story<Props> = (args) => <Theme {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'white-theme',
  children: <h1>hello</h1>,
};

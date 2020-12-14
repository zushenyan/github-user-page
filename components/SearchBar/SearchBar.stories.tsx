import React from 'react';
import { Story, Meta } from '@storybook/react';

import SearchBar, { Props } from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story<Props> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  inputValue: 'foo',
};

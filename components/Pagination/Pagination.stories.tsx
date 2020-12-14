import React from 'react';
import { Story, Meta } from '@storybook/react';

import Pagination, { Props } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta;

const Template: Story<Props> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentPage: 1,
  totalPage: 100,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

import { ReactComponent as StarIcon } from '../../assets/star.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  label: 'Button',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  shouldFullWidth: true,
  label: 'Button',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  iconBefore: <StarIcon />,
  label: 'Button',
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  iconAfter: <StarIcon />,
  label: 'Button',
};

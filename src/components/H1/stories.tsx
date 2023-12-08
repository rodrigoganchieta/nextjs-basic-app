import { Meta, Story } from '@storybook/react/types-6-0';
import { H1, H1Props } from '.';

export default {
  title: 'H1',
  component: H1,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<H1Props> = (args) => <H1 {...args} />;

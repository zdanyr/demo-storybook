import React from 'react';

import { Page } from './Page';

export default {
  title: 'Example/Blog',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;

export const WholePage = Template.bind({});

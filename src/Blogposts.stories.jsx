import React from 'react';

import { Blogposts } from './Blogposts';

export default {
  title: 'Example/Blog',
  component: Blogposts,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <Blogposts/>;

export const SeveralBlogPosts = Template.bind({});
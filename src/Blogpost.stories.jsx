import React from 'react';
import {Blogpost} from './Blogpost';

export default {
  title: 'Example/Blog/Blogpost',
  component: Blogpost,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Blogpost {...args} />;

export const DefaultPost = Template.bind({})
DefaultPost.args = {
  title: 'I am just a title',
  text: 'And I am just a text. Normally, I am slightly longer than the title',
}

export const LongTitlePost = Template.bind({})
LongTitlePost.args = {
  title: 'I am just a title, but I am slightly unusual. Somebody decided to copy-paste a lot of test in me. So here we go...  Vestibulum rhoncus faucibus odio, ut pharetra dolor fermentum at. Etiam in felis quis lorem interdum placerat id sit amet risus. Donec non convallis ante. Quisque dignissim nisi quis magna ultricies maximus. In non interdum nisi. Mauris semper ut ex eget tristique. Vivamus et nunc luctus, semper quam sit amet, suscipit dui. Cras pulvinar viverra ipsum, vitae fermentum orci sodales at. Curabitur tincidunt condimentum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ut enim non elit laoreet consequat.',
  text: 'And I am just a text. Normally, I am slightly longer than the title. Not today',
}

export const NoSpacesTitle = Template.bind({})
NoSpacesTitle.args = {
  title: 'EDGECASESAREGREATWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
  text: 'And I am just a text. Normally, I am slightly longer than the title',
}

export const LongTextPost = Template.bind({})
LongTextPost.args = {
  title: 'I am just a title',
  text: 'And I am just a text. Normally, I am slightly longer than the title. But today I win by far... Nam eget eros id risus rutrum varius. Vestibulum rhoncus faucibus odio, ut pharetra dolor fermentum at. Etiam in felis quis lorem interdum placerat id sit amet risus. Donec non convallis ante. Quisque dignissim nisi quis magna ultricies maximus. In non interdum nisi. Mauris semper ut ex eget tristique. Vivamus et nunc luctus, semper quam sit amet, suscipit dui. Cras pulvinar viverra ipsum, vitae fermentum orci sodales at. Curabitur tincidunt condimentum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ut enim non elit laoreet consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec erat suscipit, rutrum magna quis, lobortis metus. Ut sollicitudin ac odio id blandit. Vivamus porttitor augue nec eros facilisis fringilla. Integer est nisl, condimentum porttitor dui eu, rhoncus porttitor risus. Integer maximus blandit sapien et efficitur. Morbi ex urna, auctor vitae leo et, pharetra elementum neque. Sed ac dapibus purus, eget ultricies ipsum. Vivamus consequat turpis eleifend odio dignissim, nec posuere magna interdum. Nam interdum ante ornare neque dignissim, at egestas nisl efficitur. Ut mollis pulvinar imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec blandit diam. Phasellus leo neque, lobortis sodales risus ut, aliquet maximus nulla. Integer interdum, erat ut tincidunt pellentesque, tortor felis mollis libero, vel tincidunt justo dolor sit amet justo. Aenean id commodo nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, mi nec laoreet accumsan, quam ante tempor neque, ut maximus risus nunc nec tellus. Mauris feugiat rhoncus est, eget tempus nisi pharetra vitae. Mauris non faucibus orci. Quisque luctus varius neque. Sed id neque sed odio egestas tempor. Morbi pulvinar est at nulla pulvinar, quis euismod sem consectetur. Maecenas quis est quis eros bibendum eleifend eget eget felis. Suspendisse scelerisque elit ante, in bibendum tellus tempor ac. Mauris sed vehicula risus. Phasellus gravida commodo velit, sed mattis nibh fringilla a. Ut dictum libero nunc, vel suscipit dolor finibus non. Sed condimentum dictum sodales. Integer semper convallis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, mi nec laoreet accumsan, quam ante tempor neque, ut maximus risus nunc nec tellus. Mauris feugiat rhoncus est, eget tempus nisi pharetra vitae. Mauris non faucibus orci. Quisque luctus varius neque. Sed id neque sed odio egestas tempor. Morbi pulvinar est at nulla pulvinar, quis euismod sem consectetur. Maecenas quis est quis eros bibendum eleifend eget eget felis. Suspendisse scelerisque elit ante, in bibendum tellus tempor ac. Mauris sed vehicula risus. Phasellus gravida commodo velit, sed mattis nibh fringilla a. Ut dictum libero nunc, vel suscipit dolor finibus non. Sed condimentum dictum sodales. Integer semper convallis sollicitudin.',
}

export const PostWithPicture = Template.bind({})
PostWithPicture.args = {
  title: 'I am just a title',
  text: 'Look at this cute puppy!',
  pictureUrl: 'https://images.unsplash.com/photo-1656954261081-93c805b386b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
}

export const PostWithPictureAndLongText = Template.bind({})
PostWithPictureAndLongText.args = {
  title: 'I am just a title',
  text: 'Look at this cute puppy! Normally, I am slightly longer than the title. But today I win by far... Nam eget eros id risus rutrum varius. Vestibulum rhoncus faucibus odio, ut pharetra dolor fermentum at. Etiam in felis quis lorem interdum placerat id sit amet risus. Donec non convallis ante. Quisque dignissim nisi quis magna ultricies maximus. In non interdum nisi. Mauris semper ut ex eget tristique. Vivamus et nunc luctus, semper quam sit amet, suscipit dui. Cras pulvinar viverra ipsum, vitae fermentum orci sodales at. Curabitur tincidunt condimentum vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ut enim non elit laoreet consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur nec erat suscipit, rutrum magna quis, lobortis metus. Ut sollicitudin ac odio id blandit. Vivamus porttitor augue nec eros facilisis fringilla. Integer est nisl, condimentum porttitor dui eu, rhoncus porttitor risus. Integer maximus blandit sapien et efficitur. Morbi ex urna, auctor vitae leo et, pharetra elementum neque. Sed ac dapibus purus, eget ultricies ipsum. Vivamus consequat turpis eleifend odio dignissim, nec posuere magna interdum. Nam interdum ante ornare neque dignissim, at egestas nisl efficitur. Ut mollis pulvinar imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin nec blandit diam. Phasellus leo neque, lobortis sodales risus ut, aliquet maximus nulla. Integer interdum, erat ut tincidunt pellentesque, tortor felis mollis libero, vel tincidunt justo dolor sit amet justo. Aenean id commodo nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, mi nec laoreet accumsan, quam ante tempor neque, ut maximus risus nunc nec tellus. Mauris feugiat rhoncus est, eget tempus nisi pharetra vitae. Mauris non faucibus orci. Quisque luctus varius neque. Sed id neque sed odio egestas tempor. Morbi pulvinar est at nulla pulvinar, quis euismod sem consectetur. Maecenas quis est quis eros bibendum eleifend eget eget felis. Suspendisse scelerisque elit ante, in bibendum tellus tempor ac. Mauris sed vehicula risus. Phasellus gravida commodo velit, sed mattis nibh fringilla a. Ut dictum libero nunc, vel suscipit dolor finibus non. Sed condimentum dictum sodales. Integer semper convallis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis, mi nec laoreet accumsan, quam ante tempor neque, ut maximus risus nunc nec tellus. Mauris feugiat rhoncus est, eget tempus nisi pharetra vitae. Mauris non faucibus orci. Quisque luctus varius neque. Sed id neque sed odio egestas tempor. Morbi pulvinar est at nulla pulvinar, quis euismod sem consectetur. Maecenas quis est quis eros bibendum eleifend eget eget felis. Suspendisse scelerisque elit ante, in bibendum tellus tempor ac. Mauris sed vehicula risus. Phasellus gravida commodo velit, sed mattis nibh fringilla a. Ut dictum libero nunc, vel suscipit dolor finibus non. Sed condimentum dictum sodales. Integer semper convallis sollicitudin.',
  pictureUrl: 'https://images.unsplash.com/photo-1656954261081-93c805b386b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
}
import React from 'react';
import './css/header.css';
import {Button} from "./Button";
import {Blogpost} from "./Blogpost";

export const Blogposts = () => (
  <div className="wrapper">
    <div>
      <h1>Read new Lorem and Ipsum posts!</h1>
      <Blogpost
        title='Subscribi butono clickum est'
        text='Aliquam pharetra sollicitudin elit, et efficitur magna fermentum et. In hac habitasse platea dictumst.
          Vestibulum nec condimentum justo. Phasellus urna libero, semper sit amet consectetur id, tempus ut risus. Nam
          cursus arcu vestibulum, egestas mi sit amet, volutpat purus. Aenean nisl velit, tempus aliquet fringilla at,
          fermentum eu mauris. Vestibulum scelerisque placerat felis, ac lobortis quam vehicula non. Aliquam dapibus mi
          sed felis consectetur, consequat rhoncus odio scelerisque. Duis tincidunt mi est, vel rutrum orci ultricies nec.
          Praesent fringilla sed justo at semper. Praesent vehicula, nibh nec venenatis accumsan, metus massa mollis
          neque, at feugiat metus mauris at massa.'
        pictureUrl={'https://yt3.ggpht.com/kR23JPvGURGn3SkGhzsI3XSPH-veLkwDD8KNfXlA6i6q7eIK1rw0SfGPN2_JMNLy5R7NMQWr=s176-c-k-c0x00ffffff-no-rj'}
      >
      </Blogpost>
      <Blogpost
        title='Checkum upum otherio vidi'
        text='Sed sed consectetur metus, pellentesque sodales odio.
          Mauris molestie elit quis nisi laoreet, nec dapibus dolor tristique.
          Duis vitae libero sapien. Cras eget accumsan diam, nec tempor quam. Etiam luctus molestie nisi ut porttitor.
          Curabitur vitae augue volutpat, egestas tellus nec, tincidunt lorem. Nunc neque neque, iaculis non luctus quis, lobortis et erat.
          Tivamus eu venenatis magna. Integer porta arcu id tellus mollis, nec laoreet nisi
          venenatis.'
        pictureUrl={'https://i9.ytimg.com/vi/UiIrs4tk5SY/mqdefault.jpg?v=626c85e3&sqp=CMiVqJYG&rs=AOn4CLA0qN7w3t2P-0j2myrInEQjHcqO1w'}
      >
      </Blogpost>
      <Blogpost
        title='Et thumbse uppare clickum vel odio ornare'
        text={'Ut congue dolor vel odio ornare, sed aliquet quam euismod. \n\n Aenean sollicitudin pellentesque tempor. Sed at enim lobortis, consectetur erat non, ornare lacus. Integer posuere turpis ante, sed iaculis nunc tempor at. Vestibulum eu nulla aliquet enim aliquam scelerisque et eget sapien. Duis iaculis felis sed dui sagittis bibendum. Fusce eros magna, tempus a quam non, tincidunt euismod massa. Fusce scelerisque nisl et laoreet mollis. Integer vestibulum accumsan elit gravida scelerisque. Nunc vulputate justo gravida dolor congue faucibus vitae ut tortor.'}
        pictureUrl={'https://i.kym-cdn.com/entries/icons/mobile/000/034/772/Untitled-1.jpg'}
      >
      </Blogpost>
      <Button primary={false} label={'Previous page'}></Button>
      <Button primary={true} label={'Next page'}></Button>
    </div>
  </div>
);
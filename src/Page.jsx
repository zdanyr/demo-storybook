import React from 'react';
import './css/page.css';
import {Header} from './Header';
import {Blogposts} from "./Blogposts";
import {Footer} from "./Footer";

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({name: 'Jane Doe'})}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({name: 'Jane Doe'})}
      />
      <Blogposts/>
      <Footer/>
    </article>
  );
};

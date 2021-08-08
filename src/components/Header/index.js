import React from 'react';
import Nav from '../Nav';

function Header() {
  return (
    <section className="header">
      <div><h1>Header</h1></div>
      <div><Nav></Nav></div>
    </section>
  );
}

export default Header;
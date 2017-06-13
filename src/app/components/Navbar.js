import React from 'react';
import {Fixed, NavItem, Space, Toolbar} from 'rebass';

const Navbar = () => (
  <Fixed top left right zIndex={1}>
    <Toolbar>
      <NavItem href='http://jxnblk.com/rebass'>
        <span>Alexandria</span>
      </NavItem>
      <Space auto/>
    </Toolbar>
  </Fixed>
);

export default Navbar;

import React from "react";

import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  LinkNew
} from "./style";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <LinkNew to="{window.location.href}/">Home</LinkNew>
          </ListItem>
          <ListItem>
            <Anchor>Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>About</Anchor>
          </ListItem>
          <ListItem>
            <LinkNew to="{window.location.href}/contact">Contact</LinkNew>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;

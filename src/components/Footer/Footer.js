import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>About</LinkTitle>
          <LinkItem href="#about">Education</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="mailto:15gv1@queensu.ca">15gv1@queensu.ca</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>DEMO</LinkTitle>
          <LinkItem href="#projects">Projects</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Venditti-IT &trade;</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/GianlucaVend">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gianlucavenditti-/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/gianlucavend/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

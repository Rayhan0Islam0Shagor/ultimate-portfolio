import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
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
} from './FooterStyles';
import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://t.me/rayhan_islam45">Telegram</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:raihanislamshagor2@gmail.com">
            raihanislamshagor2@gmail.com
          </LinkItem>

          {/* <LinkTitle>Contact me</LinkTitle>
          <ContactForm /> */}
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            &copy; {new Date().getFullYear()}
            <Link target="_blank" href="https://github.com/Rayhan0Islam0Shagor">
              Rayhan Islam
            </Link>
            . All rights reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            target="_blank"
            href="https://github.com/Rayhan0Islam0Shagor"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/rayhan045"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.instagram.com/is_rayhan_sh/"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          {/* <SocialIcons href="https://www.twitter.com/lordarcadius">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

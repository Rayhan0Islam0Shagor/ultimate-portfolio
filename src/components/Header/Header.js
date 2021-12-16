import Link from 'next/link';
import React from 'react';
import Headroom from 'react-headroom';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Headroom>
    <Container>
      <Div1>
        <Link href="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <img
              src="/logo.jpg"
              height={50}
              width={50}
              style={{ borderRadius: '50%', overflow: 'hidden' }}
            />
            {/* <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
              Rayhan
            </span> */}
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <a href="https://raihanislamshagor2.medium.com/">
            <NavLink>Blog</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Rayhan0Islam0Shagor">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="www.linkedin.com/in/rayhan045">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/is_rayhan_sh/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </Headroom>
);

export default Header;

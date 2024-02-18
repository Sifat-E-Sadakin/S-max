"use client";
import styled from "styled-components";
import logo from "@/public/img/logo.png";
import twitter from "@/public/img/twitter.png";
import paper from "@/public/img/paper.png";
import youtube from "@/public/img/yt.png";
import instagram from "@/public/img/instagram.png";
import discord from "@/public/img/discord.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    openNav
      ? ((document.body.style.overflow = "hidden"),
        (document.body.style.position = "fixed"),
        (document.body.style.width = "100%"),
        (document.body.style.height = "100%"))
      : ((document.body.style.overflow = "visible"),
        (document.body.style.position = "static"),
        (document.body.style.width = "auto"),
        (document.body.style.height = "auto"));
  });
  return (
    <Header className="header">
      <>
        <Nav>
          <Logo>
            <Link className="font-bold text-5xl" href="/">
              SoftMax
            </Link>
          </Logo>
          <Menu openNav={openNav}>
            <List>
              <a href="#">Our Idea</a>
            </List>
            <List>
              <a href="#">InfiniteLaunch</a>
            </List>
            <List>
              <a href="#">$Infinity</a>
            </List>
            <List>
              <a href="#">Audits</a>
            </List>
            <List>
              <a href="#">Whitepaper</a>
            </List>
            <List type={"social"}>
              <a
                href="https://www.youtube.com/channel/UCOCFFrKsRMtbnnQtnQLsSyw"
                target="_blank"
                rel="noreferrer">
                <Image src={youtube} alt="youtube" />
              </a>
              <a href="https://twitter.com/infinite_eco" className="ms-3">
                <Image src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.instagram.com/ecosysteminfinite/"
                className="ms-3">
                <Image src={instagram} alt="instagram" width={19} height={19} />
              </a>
              <a href="https://t.me/InfiniteTG" className="ms-3">
                <Image src={paper} alt="Paper" />
              </a>
              <a href="https://discord.gg/y7uvFsGY" className="ms-3">
                <Image src={discord} alt="Discord" width={19} height={19} />
              </a>
            </List>
            <List className="btn btn-primary" type="btn">
              <Link href="/login" className="grad-btn" rel="noreferrer">
                Login
              </Link>
            </List>
            <List>
              <div className="social-btn">
                <a
                  href="https://drive.google.com/file/d/1J5dDsadAeVMzYmU9bVgS8argBHndkCIM/view?usp=sharing"
                  className="outline-btn"
                  target="_blank"
                  rel="noreferrer">
                  Whitepaper (EN)
                </a>
                <a
                  href="https://drive.google.com/file/d/1Ws2QIA-MbQMGsa74rCfk9P9s20pAEBWk/view?usp=sharing"
                  className="grad-btn"
                  target="_blank"
                  rel="noreferrer">
                  Whitepaper (JN)
                </a>
              </div>
            </List>
          </Menu>
          <Toggle>
            {openNav ? (
              <AiOutlineClose onClick={() => setOpenNav(false)} />
            ) : (
              <AiOutlineMenu onClick={() => setOpenNav(true)} />
            )}
          </Toggle>
        </Nav>
      </>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  background-color: white;
`;

const Nav = styled.nav`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1400px) {
    height: 100px;
  }
`;

const Logo = styled.div`
  width: 180px;
  @media screen and (max-width: 1400px) {
    width: 120px;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1400px) {
    position: fixed;
    width: 100%;
    height: 89vh;
    top: 74px;
    right: ${props => (props.openNav ? 0 : "-100%")};
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 999;
  }
`;
const List = styled.li`
  display: flex;
  align-items: center;
  margin-left: ${props => {
    switch (props.type) {
      case "social":
        return "86px";
      case "btn":
        return "34.5px";
      default:
        return "50px";
    }
  }};
  a {
    color: var(--black);
    display: inline-block;
  }
  .grad-btn {
    color: white;
  }
  .social-btn {
    display: flex;
    width: 100%;
    display: none;
    .outline-btn {
      background-color: white;
      margin-right: 10px;
    }
    .grad-btn {
      &:hover {
        background-image: none;
        background-color: white;
        background-clip: border-box;
        -webkit-text-fill-color: black;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    margin: 15px 0px;
    .social-btn {
      display: block;
    }
  }
`;

const Toggle = styled.div`
  color: var(--black);
  font-size: 32px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 1400px) {
    display: block;
    position: relative;
    bottom: 6px;
  }
`;

import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import LogoImg from "../img/greedyverseLogo.png";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import colors from "../constants/colors";
import NavSm from "./NavSm";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  // const [pageY, setPageY] = useState(0);

  // let oldValue = 0;
  // let newValue = 0;
  // const controlNav = () => {
  //   window.addEventListener("scroll", (e) => {
  //     newValue = window.pageYOffset;
  //     setPageY(window.pageYOffset);
  //     if (oldValue < newValue) {
  //       // console.log("Up");
  //       setShow(false);
  //     } else if (oldValue > newValue || window.pageYOffset === 0) {
  //       // console.log("Down");
  //       setShow(true);
  //     }
  //     oldValue = newValue;
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNav);

  //   return () => {
  //     window.removeEventListener("scroll", controlNav);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Container
      isScrolling={isScrolling}
      // className={`${show === true || isAnimating === true ? "" : "noShow"} ${
      //   show === true && pageY !== 0 ? "shadow" : ""
      // }`}
    >
      <NavContainer>
        <div>
          <Link to='/'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Image src={LogoImg} />
            </motion.div>
          </Link>
        </div>
        <div>
          <NavMenu>
            <ul className='d-flex gap-4'>
              {menus.map((menu) => (
                <NavItemLg
                  key={menu.id}
                  menu={menu}
                  isScrolling={isScrolling}
                />
              ))}
            </ul>
          </NavMenu>
        </div>
      </NavContainer>
      <NavIcon onClick={() => setIsAnimating((prev) => !prev)}>
        <BiMenu size={30} color={colors.white} />
      </NavIcon>
      {/* <NavIcon
        className={`${isAnimating ? "active" : ""}`}
        onClick={() => setIsAnimating((prev) => !prev)}
      /> */}
      <NavSm
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
        isScrolling={isScrolling}
      />
    </Container>
  );
};

const Container = styled.nav`
  width: 100%;
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  z-index: 100;
  height: 60px;
  background-color: ${(props) =>
    ({ isScrolling }) =>
      isScrolling ? "rgba(116, 109, 109, 0.03)" : colors.yellow};
  transition: all 0.3s ease-in;
  /* background-color: red; */
  /* &.noShow {
    transform: translateY(-100%);
  } */
`;
const NavMenu = styled.div`
  & ul {
    list-style: decimal;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  height: 1.6rem;
  width: auto;
  transition: all 0.3s;
  & :hover {
    transform: rotate(-4deg);
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const NavIcon = styled.span`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 1rem;
  z-index: 1000;
  display: none;

  @media only screen and (max-width: 700px) {
    z-index: 1000;
    display: inline-block;
  }
  /* height: 3rem;
  width: 4rem;
 
  top: 1rem;
  z-index: 1000;
  display: none;
  &::before {
    position: absolute;
    content: "";
    z-index: 1000;
    top: 0.5rem;
    height: 0.2rem;
    width: 2.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.light};
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.2s ease-in;
  }
  &::after {
    position: absolute;
    top: 1.5rem;
    content: "";
    z-index: 1000;
    height: 0.2rem;
    width: 1.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.light};
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.2s ease-in;
  } */

  /* &.active {
    &::before {
      top: 1.5rem;
      width: 2rem;
      transform: rotate(45deg);
    }
    &::after {
      width: 2rem;
      transform: rotate(-45deg);
    }
  } */
`;

export default Nav;

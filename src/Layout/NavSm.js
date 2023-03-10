import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import menus from "../constants/menus";
import colors from "../constants/colors";

const NavSm = ({ isAnimating, setIsAnimating, isScrolling }) => {
  return (
    <>
      <AnimatingContainer
        className={isAnimating ? "clicked" : ""}
        onClick={() => setIsAnimating(false)}
      >
        <NavContainer onClick={(e) => e.stopPropagation()}>
          {menus.map((menu) => (
            <div className='ms-3' key={menu.id}>
              <Heading>
                {menu.path === "https://greedyverse.gitbook.io/white-paper" ? (
                  <a className="text-black" href={menu.path} onClick={() => setIsAnimating(false)}>
                    {menu.name}
                  </a>
                ) : (
                  <Link to={menu.path} onClick={() => {setIsAnimating(false); window.location = menu.path}}>
                    {menu.name}
                  </Link>
                )}
              </Heading>
            </div>
          ))}
          <div className='text-center'>
            <a href="mailto:support@greedyverse.co" className="lb_remove_text_decoration"><Whitepaper>Contact us</Whitepaper></a>
          </div>
        </NavContainer>
      </AnimatingContainer>
    </>
  );
};

const AnimatingContainer = styled.div`
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  padding: 1rem;
  transform: translateY(-100%);
  transition: all 0.3s ease-in;
  &.clicked {
    transform: translateY(12%);
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 80%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  border-radius: 1.5rem;
  gap: 0.3rem;
  & li {
    margin: 0.5rem 0;
  }
`;
const Heading = styled.h6`
  & a,
  a:link {
    color: ${colors.primary};
    text-decoration: none;
    font-size: 20px !important;
  }
`;
const Whitepaper = styled.button`
  border-radius: 3rem;
  text-transform: capitalize;
  font-weight: 600 !important;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  background-color: ${colors.black};
  color: ${colors.white};
`;
export default NavSm;

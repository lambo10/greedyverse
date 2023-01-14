import { Link } from "react-scroll";
import styled from "styled-components";
import colors from "../constants/colors";

const NavItemLg = ({ menu, isScrolling }) => {
  return (
    <div className='position-relative'>
      <NavItem isScrolling={isScrolling} role='button'>
        <a href={menu.path} to={menu.path}>{menu.name}</a>
      </NavItem>
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 400;
  font-family: "supercellmagic";
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  transform-origin: left;
  font-size: 1rem;
  color: ${(props) =>
    ({ isScrolling }) =>
      isScrolling ? colors.white : null};
  &:hover {
    color: ${(props) =>
      ({ isScrolling }) =>
        isScrolling ? colors.yellow : null};
  }
`;

export default NavItemLg;

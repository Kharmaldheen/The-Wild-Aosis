import { AnimatePresence, motion } from "framer-motion";
// import MobileMenuItem from "./MobileMenuItem";
import { styled } from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const variants1 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const mobileNavExitProps = {
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const StyledUl = styled(motion.ul)`
  padding: 25px;
  position: absolute;
  top: 70px;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-brand-800);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const StyledLi = styled(motion.li)`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

function MobileNav({ toggleOpen }) {
  const handleNavClick = (e) => {
    toggleOpen();
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <StyledUl variants={variants1} onClick={handleNavClick}>
          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/">
              <Logo />
            </StyledNavLink>
          </StyledLi>

          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </StyledLi>

          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/bookings">
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </StyledNavLink>
          </StyledLi>

          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </StyledNavLink>
          </StyledLi>

          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/users">
              <HiOutlineUsers />
              <span>Users</span>
            </StyledNavLink>
          </StyledLi>

          <StyledLi
            variants={variants2}
            {...mobileNavExitProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledNavLink to="/settings">
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;

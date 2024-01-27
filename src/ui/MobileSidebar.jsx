import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimention";
import MobileNav from "./MobileNav";
import MobileMenuToggle from "./MobileMenuToggle";
import styled from "styled-components";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const StyledNav = styled(motion.nav)``;

const StyledBackground = styled(motion.div)`
  position: absolute;
  top: 13px;
  left: 0;
  bottom: 0;
  width: 80%;
  background: var(--color-grey-900);
  backdrop-filter: blur(4px);
`;

const openStyles = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: "100%",
  backdropFilter: "blur(4px)",
  zIndex: 100,
  // Add any other styles you want to apply when isOpen is true
};

export const MobileSidebar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <StyledNav
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={isOpen ? openStyles : ""}
    >
      <StyledBackground className="background" variants={sidebar} />
      {isOpen && <MobileNav toggleOpen={toggleOpen} />}
      <MobileMenuToggle toggle={() => toggleOpen()} />
    </StyledNav>
  );
};

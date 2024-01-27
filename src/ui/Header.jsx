import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
import { MobileSidebar } from "./MobileSidebar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    gap: 1.6rem;
    justify-content: space-between;
    padding: 3.2rem 3.2rem;
  }
`;

const StyledMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  return (
    <div>
      <StyledHeader>
        <StyledMenu>
          <MobileSidebar />
        </StyledMenu>
        <UserAvatar />
        <HeaderMenu />
      </StyledHeader>
    </div>
  );
}

export default Header;

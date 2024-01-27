import styled from "styled-components";

export const Flag = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);

  @media screen and (max-width: 768px) {
    max-width: 1.5rem;
  }
`;

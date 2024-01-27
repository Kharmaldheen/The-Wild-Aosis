import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 9rem 1.2fr;
    padding: 0.7rem 1rem;
    gap: 1.2rem;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    /* padding-top: 0; */
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;

    @media screen and (max-width: 768px) {
      gap: 0.6rem;
    }
  }
`;

const Error1 = styled.span`
  display: block;
  font-size: 1.3rem;
  color: var(--color-red-700);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Error2 = styled.span`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: var(--color-red-700);
    display: flex;
    justify-content: center;
    font-size: 1rem;
    justify-content: flex-end;
  }
`;

function FormRow({ error, children }) {
  return (
    <>
      <StyledFormRow>
        {children}
        {error && <Error1>{error}</Error1>}
      </StyledFormRow>
      {error && <Error2>{error}</Error2>}
    </>
  );
}

export default FormRow;

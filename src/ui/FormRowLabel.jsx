import { styled } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1.2fr;
    margin: 0 auto;
    gap: 2rem;
    padding: 1.1rem 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1rem;
`;

const Error1 = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Error2 = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.1rem;
    color: var(--color-red-700);
    justify-content: flex-end;
  }
`;

function FormRowLabel({ children, label, error }) {
  return (
    <>
      <StyledFormRow>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error && <Error1>{error}</Error1>}
      </StyledFormRow>
      {error && <Error2>{error}</Error2>}
    </>
  );
}

export default FormRowLabel;

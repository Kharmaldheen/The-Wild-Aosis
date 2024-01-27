import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  /* display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    gap: 0.4rem;
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const StyledFullnameFlag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

function TodayItem({ activity }) {
  const {
    id,
    status,
    guests: { fullName, nationality, countryFlag },
    numNights,
  } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <StyledFullnameFlag>
        <Flag src={countryFlag} alt={`flag of ${nationality}`} />

        <Guest>{fullName}</Guest>
      </StyledFullnameFlag>

      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check-in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;

import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";

import { styled } from "styled-components";

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

function Bookings() {
  return (
    <>
      <StyledRow>
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </StyledRow>

      <BookingTable />
    </>
  );
}

export default Bookings;

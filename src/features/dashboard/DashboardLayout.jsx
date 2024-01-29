import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledActivityChartContainer = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  const { confirmStays, isLoading2, numDays } = useRecentStays();

  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <StyledStats>
        <Stats
          bookings={bookings}
          confirmStays={confirmStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
      </StyledStats>

      <StyledActivityChartContainer>
        <TodayActivity />

        <DurationChart confirmedStays={confirmStays} />
      </StyledActivityChartContainer>

      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

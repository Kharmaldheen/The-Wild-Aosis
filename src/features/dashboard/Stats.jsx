import {
  HiBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmStays, numDays, cabinCount } = {}) {
  //1. Number of bookings
  const numBookings = bookings?.length;

  //2. the total sales
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3. checkedIn
  const checkIns = confirmStays?.length;

  //4. occupancyRates
  //number of checkedIn nights / all available nights
  //all available nights is number of days * total number of cabins

  const occupancyRates =
    confirmStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Booking"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rates"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRates * 100) + "%"}
      />
    </>
  );
}

export default Stats;

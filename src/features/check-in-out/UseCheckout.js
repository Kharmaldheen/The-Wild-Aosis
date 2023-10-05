import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

function UseCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} is sucessfully checked out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (data) =>
      toast.error(`There was a problem checking-out booking #${data.id} `),
  });

  return { checkout, isCheckingOut };
}

export default UseCheckout;

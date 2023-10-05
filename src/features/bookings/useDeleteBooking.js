import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBookingfxn } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Booking Succcessfully deleted");
      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBookingfxn };
}

export default useDeleteBooking;

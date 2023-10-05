import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin Succcessfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutate };
}

export default useDeleteCabin;

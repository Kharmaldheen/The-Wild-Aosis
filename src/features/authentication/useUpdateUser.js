import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuthentication";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: updating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account sucessfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, updating };
}

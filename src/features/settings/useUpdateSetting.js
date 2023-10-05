import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("settings successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error("Error update the settings"),
  });

  return { mutate, isLoading };
}

export default useUpdateSetting;

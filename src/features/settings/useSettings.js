import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSettings() {
  //the query function has to be a function that returns a promise
  const {
    data: settings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settings, error, isLoading };
}

export default useSettings;

import { useQuery } from "react-query";
import { getFlights } from "../api";
import { Flight } from "../pages/MainPage/types";

type HookParams = {
  offset: number;
  limit: number;
};

type Hook = (
  params: HookParams
) => { isLoadingFlights?: boolean; flights: Flight[] };

const useFlights: Hook = (params) => {
  const { offset, limit } = params;

  const { data: flights, isFetching } = useQuery<any>("flights", () => getFlights(params), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });

  if (isFetching) return { isLoadingFlights: isFetching, flights: [] };

  return { flights: flights.data.slice(offset, limit) };
};

export default useFlights;

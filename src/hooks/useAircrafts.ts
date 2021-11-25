import { useQuery } from "react-query";
import { getAircrafts } from "../api";
import { Aircraft } from "../pages/MainPage/types";

type HookParams = {
  offset: number;
  limit: number;
};

type Hook = (
  params: HookParams
) => {
  aircrafts: Aircraft[];
  isLoadingAircrafts?: boolean;
};

const useAircrafts: Hook = (params) => {
  const { offset, limit } = params;

  const { data: aircrafts, isFetching } = useQuery<any>("aircrafts", () => getAircrafts(params), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
  });

  if (isFetching) return { isLoadingAircrafts: isFetching, aircrafts: [] };

  return { aircrafts: aircrafts.data.slice(offset, limit) };
};

export default useAircrafts;

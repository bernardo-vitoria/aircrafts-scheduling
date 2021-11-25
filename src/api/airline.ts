import axios from "axios";

export const url = {
  getAircrafts: (params: number[]) =>
    `https://infinite-dawn-93085.herokuapp.com/aircrafts?offset=${params[0]}&limit=${params[1]}`,
  getFlights: (params: number[]) =>
    `https://infinite-dawn-93085.herokuapp.com/flights?offset=${params[0]}&limit=${params[1]}`,
};

type Params = {
    offset: number;
    limit: number;
};

export const getAircrafts = async ({offset, limit}: Params) => {
  const { data } = await axios.get(url.getAircrafts([offset, limit]));

  return data;
};


export const getFlights = async ({ offset, limit }: Params) => {
  const { data } = await axios.get(url.getFlights([offset, limit]));

  return data;
};
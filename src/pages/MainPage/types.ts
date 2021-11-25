export type Flight = {
    arrivaltime: number,
    departuretime: number,
    destination: string,
    id:  string,
    origin: string,
    readable_arrival: string, 
    readable_departure: string
};

export type Aircraft = {
  base: string;
  economySeats: number;
  ident: string;
  type: string;
};
const aircraft = { ident: "GABCD", type: "A320", economySeats: 186, base: "EGKK" };

const aircrafts = [
  { ident: "GABCD", type: "A320", economySeats: 186, base: "EGKK" },
];

const flight = {
  id: "AS1001",
  departuretime: 21600,
  arrivaltime: 26100,
  readable_departure: "06:00",
  readable_arrival: "07:15",
  origin: "LFSB",
  destination: "LFMN",
};

const flights = [
  {
    id: "AS1001",
    departuretime: 21600,
    arrivaltime: 26100,
    readable_departure: "06:00",
    readable_arrival: "07:15",
    origin: "LFSB",
    destination: "LFMN",
  },
  {
    id: "AS1002",
    departuretime: 27900,
    arrivaltime: 32100,
    readable_departure: "07:45",
    readable_arrival: "08:55",
    origin: "LFMN",
    destination: "LFSB",
  },
  {
    id: "AS1025",
    departuretime: 22800,
    arrivaltime: 28200,
    readable_departure: "06:20",
    readable_arrival: "07:50",
    origin: "LFSB",
    destination: "EDDH",
  },
  {
    id: "AS1026",
    departuretime: 30000,
    arrivaltime: 35100,
    readable_departure: "08:20",
    readable_arrival: "09:45",
    origin: "EDDH",
    destination: "LFSB",
  },
];

export {
    aircraft,
    aircrafts,
    flight,
    flights
};

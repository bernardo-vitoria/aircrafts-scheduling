import create, { SetState } from "zustand";
import { Aircraft, Flight } from "../pages/MainPage/types";

type RotationStack = {
  availableFlights: Flight[];
  setAvailableFlights: (flights: Flight[]) => void;
  flightsRotation: Flight[];
  addFlightToRotation: (flight: Flight) => void;
  removeFlightFromRotation: (flight: Flight) => void;
  selectedAircraft?: Aircraft;
  setSelectedAircraft: (aircraft: Aircraft) => void;
};

const useRotationStack = create<RotationStack>(
  (set: SetState<RotationStack>) => ({
    flightsRotation: [],
    addFlightToRotation: (value) =>
      set(({ flightsRotation, availableFlights }) => {
          return {
            flightsRotation: [...flightsRotation, value].sort((a, b) =>
              a.departuretime < b.departuretime ? -1 : 0
            ),
            availableFlights: availableFlights.filter(
              (flight) => flight.id !== value.id
            ),
          };
      }),
    removeFlightFromRotation: (value) =>
      set((state) => ({
        flightsRotation: state.flightsRotation.filter(
          ({ id }) => value.id !== id
        ),
        availableFlights: [...state.availableFlights, value],
      })),
    selectedAircraft: undefined,
    setSelectedAircraft: (value) => set({ selectedAircraft: value }),
    availableFlights: [],
    setAvailableFlights: (value) => set({ availableFlights: value }),
  })
);

export default useRotationStack;

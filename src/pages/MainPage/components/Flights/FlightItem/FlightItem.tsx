import React from 'react';
import { styled } from "@mui/material/styles";
import { Paper } from '../../../../../components';
import { useRotationStack } from '../../../../../store';
import { Flight } from "../../../types";
import "./FlightItem.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minWidth: "180px",
  margin: "8px",
  ":hover": { backgroundColor: "#FDFAF6" },
}));

const canAddFlight = (flights: Flight[], value:Flight) => {
  const lastFlightInserted = flights[flights.length - 1];

  if (flights.length === 0) return true;

  const diffBetweenFlights =
    Math.abs((lastFlightInserted.arrivaltime - value.departuretime) * 60);

  if (diffBetweenFlights < 1200) {
    return false;
  }

  if ((value.arrivaltime > 86400000)) {
    return false;
  }

  return true;
};


type Props = {
  flight: Flight;
  hasError: boolean;
  setHasError: (value: boolean) => void;
};

const FlightItem: React.FC<Props> = ({ flight, hasError, setHasError }) => {
  const { id, origin, destination, readable_arrival, readable_departure } = flight;
  const { addFlightToRotation, flightsRotation } = useRotationStack((state) => ({
    addFlightToRotation: state.addFlightToRotation,
    flightsRotation: state.flightsRotation
  }));

  const handleOnClick = () => {
    const canAdd = canAddFlight(flightsRotation,flight);
    setHasError(canAdd);

    if(canAdd) {
      addFlightToRotation(flight); setHasError(false)
    }
    else{
      setHasError(true)
    }
  };

  return (
    <Item onClick={handleOnClick}>
      <span className="flight-item">
        <div>
          <b>{id}</b>
        </div>
        <div className="card-body">
          <div className="card-body_column">
            <div>{origin}</div>
            <div>{readable_departure}</div>
          </div>
          <div className="card-body_column">
            <div>{destination}</div>
            <div>{readable_arrival}</div>
          </div>
        </div>
      </span>
    </Item>
  );
};

export default FlightItem;
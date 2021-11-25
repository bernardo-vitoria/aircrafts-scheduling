import React, { useMemo } from 'react';
import { styled } from "@mui/material/styles";
import { Paper, AirplanemodeActiveIcon } from "../../../../../components";
import { useRotationStack } from '../../../../../store';
import { Aircraft, Flight } from '../../../types';
import { useTranslation } from 'react-i18next';
import "./AircraftItem.css";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "8px",
  minWidth: "180px",
  ":hover": { backgroundColor: "#FDFAF6" },
}));

const getOcupationPercentage = (flights: Flight[]) => {
  const flightDurationSum = flights.reduce((previousValue, flight) => {

    return (
      (Math.abs(flight.departuretime - flight.arrivaltime) / 60) + previousValue
    ); } , 0);

  return Math.round(100 * flightDurationSum / 1440);
}


type Props = {
  aircraft: Aircraft;
};

const AircraftItem: React.FC<Props> = ({ aircraft }) => {
  const [t] = useTranslation();
  const { ident } = aircraft;
  const { setSelectedAircraft, flightsRotation } = useRotationStack(
    (state) => ({
      setSelectedAircraft: state.setSelectedAircraft,
      flightsRotation: state.flightsRotation,
    })
  );

  const occupationPercentage = useMemo(
    () => getOcupationPercentage(flightsRotation),
    [flightsRotation]
  );

  const handleOnClick = () => setSelectedAircraft(aircraft);

  return (
    <Item onClick={handleOnClick}>
      <div className="card-header">
        <div className="card-title">
          {`${t("mainPage:aircrafts.aircraft")}: `}
          <b>{ident}</b>
        </div>
        <div className="card-icon">
          <AirplanemodeActiveIcon color="primary" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-body_column">
          <div style={{ textAlign: "left" }}>
            {`${t("mainPage:aircrafts.ocupation")}: `}
          </div>
        </div>
        <div className="card-body_column">
          <div style={{ textAlign: "right" }}>
            <b>{occupationPercentage}%</b>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default AircraftItem;
import React, { useState } from 'react';
import { FlightItem } from './FlightItem';
import { Paper, ErrorIcon, Tooltip, Stack } from '../../../../components';
import { Flight } from '../../types';
import { useTranslation } from 'react-i18next';
import "./Flights.css";

type Props = {
    flights: Flight[];
};

const Flights: React.FC<Props> = ({flights}) => {
  const [t] = useTranslation();
  const [hasError, setHasError] = useState(false);

    return (
      <Paper sx={{ height: "90vh", minWidth: "211px" }}>
        <div className="flights-header">
          <div className="flights-header_title">
            <b>{t("mainPage:flights.flights")}</b>
          </div>
          <div className="flights-header_error">
            {hasError && (
              <Tooltip describeChild title={`${t("mainPage:flights.error")}`}>
                <ErrorIcon sx={{ color: "#e63946" }} />
              </Tooltip>
            )}
          </div>
        </div>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div className="flights-body">
            {flights.map((flight: Flight) => (
              <FlightItem
                flight={flight}
                key={`flightItem-${flight.id}`}
                hasError={hasError}
                setHasError={setHasError}
              />
            ))}
          </div>
        </Stack>
      </Paper>
    );
};

export default Flights;
import React from 'react';
import Stack from "@mui/material/Stack";
import { AircraftItem } from './AircraftItem';
import { Paper } from '../../../../components';
import { Aircraft } from '../../types';
import { useTranslation } from 'react-i18next';
import "./Aircrafts.css";

type Props = {
  aircrafts: Aircraft[];
};

const Aircrafts: React.FC<Props> = ({aircrafts}) => {
  const [t] = useTranslation();

    return (
      <Paper sx={{ height: "90vh" }}>
        <div className="aircraft-title">
          <b>{t("mainPage:aircrafts.aircrafts")}</b>
        </div>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          {aircrafts.map((aircraft: any) => (
            <AircraftItem
              aircraft={aircraft}
              key={`aircraftItem-${aircraft.id}`}
            />
          ))}
        </Stack>
      </Paper>
    );
};

export default Aircrafts;
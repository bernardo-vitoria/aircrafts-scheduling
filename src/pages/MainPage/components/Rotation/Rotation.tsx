import React from 'react';
import { RotationItem } from './RotationItem';
import { Paper, Stack } from '../../../../components';
import { useRotationStack } from '../../../../store';
import { Flight } from '../../types';
import "./Rotation.css";

const Rotation: React.FC = () => {
    const { selectedAircraft, flightsRotation } = useRotationStack((state) => ({
      selectedAircraft: state.selectedAircraft,
      flightsRotation: state.flightsRotation,
    }));

    return (
      <Paper sx={{ height: "90vh", width: "60vh" }}>
        <div className="rotation-title">
          Rotation {selectedAircraft && <b>{selectedAircraft.ident}</b>}
        </div>
        <Stack
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div className="rotation">
            {flightsRotation.map((flight: Flight) => (
              <RotationItem flight={flight} key={`rotationItem-${flight.id}`} />
            ))}
          </div>
        </Stack>
      </Paper>
    );
};

export default Rotation;
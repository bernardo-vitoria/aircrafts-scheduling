import React from 'react';
import { useRotationStack } from '../../../../../store';
import { 
  AirplaneTicketIcon, 
  ArrowForwardIcon, 
  Paper, 
  styled
} from "../../../../../components";
import { useTranslation } from 'react-i18next';
import "./RotationItem.css";
import { Flight } from '../../../types';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "50vh",
  marginTop: "8px",
  marginBottom: "8px",
  ":hover": { backgroundColor: "#FDFAF6" },
}));

type Props = {
  flight: Flight;
};

const RotationItem: React.FC<Props> = ({ flight }) => {
  const [t] = useTranslation();
  const {
    id,
    origin,
    destination,
    readable_arrival,
    readable_departure,
  } = flight;
  const { removeFlightFromRotation } = useRotationStack((state) => ({
    removeFlightFromRotation: state.removeFlightFromRotation,
  }));

  const handleOnClick = () => removeFlightFromRotation(flight);

  return (
    <Item onClick={handleOnClick}>
      <div className="card-header">
        <div className="card-title">
          {`${t("mainPage:rotations.flight")}: `}
          <b>{id}</b>
        </div>
        <div className="card-icon">
          <AirplaneTicketIcon color="primary" />
        </div>
      </div>
      <div className="card-body">
        <div className="card-body_column">
          <div style={{ textAlign: "left" }}>
            {`${t("mainPage:rotations.origin")}: `} <b>{origin}</b>
          </div>
          <div>
            {`${t("mainPage:rotations.departure")}: `}
            <b>{readable_departure}</b>
          </div>
        </div>
        <div className="card-body_column">
          <ArrowForwardIcon color="primary" sx={{ fontSize: 35 }} />
        </div>
        <div className="card-body_column">
          <div>
            {`${t("mainPage:rotations.destination")}: `} <b>{destination}</b>
          </div>
          <div style={{ textAlign: "right" }}>
            {`${t("mainPage:rotations.arrival")}: `} <b>{readable_arrival}</b>
          </div>
        </div>
      </div>
    </Item>
  );
};

export default RotationItem;
import React, { useEffect } from "react";
import { useAircrafts, useFlights } from "../../hooks";
import { Page, Loader, Grid } from '../../components';
import { Flights, Rotation, Aircrafts, Header } from "./components";
import { useRotationStack } from "../../store";
import "./MainPage.css";

const MainPage: React.FC = () => {
  const { flights, isLoadingFlights } = useFlights({
    offset: 0,
    limit: 10,
  });
  const { aircrafts, isLoadingAircrafts } = useAircrafts({
    offset: 0,
    limit: 25,
  });
  const { setAvailableFlights, availableFlights } = useRotationStack(
    (state) => ({
      setAvailableFlights: state.setAvailableFlights,
      availableFlights: state.availableFlights,
    })
  );

   useEffect(() => {
     if (flights.length <= 0) return;

     setAvailableFlights(flights);

     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isLoadingFlights]);

  if (isLoadingFlights || isLoadingAircrafts) return <Loader />;

    return (
      <Page>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Header />
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid key={"aircrafts-list"} item>
                <Aircrafts aircrafts={aircrafts} />
              </Grid>
              <Grid key={"rotation-list"} item>
                <Rotation />
              </Grid>
              <Grid key={"flights-list"} item>
                <Flights flights={availableFlights} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Page>
    );
};

export default MainPage;

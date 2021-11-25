import React, { useState } from 'react';
import { addDays, subDays, format } from "date-fns";
import {
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  Grid,
  Button
} from "../../../../components";
import "./Header.css";

const Header: React.FC = () => {
    const [date, setDate] = useState(new Date());

    const handleNextDay = () => {setDate(addDays(date, 1))};
    const handlePreviousDay = () => {setDate(subDays(date, 1))};

    const dayFormatted = format(date, "do LLLL y"); 


    return (
      <Grid key={"header"} item>
        <div className="header">
          <Button variant="text" onClick={handlePreviousDay}>
            <ArrowBackIosIcon color="primary" />
          </Button>
          <div>{dayFormatted}</div>
          <Button variant="text" onClick={handleNextDay}>
            <ArrowForwardIosIcon color="primary" />
          </Button>
        </div>
      </Grid>
    );
};

export default Header;
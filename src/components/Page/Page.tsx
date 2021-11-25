import * as React from "react";
import Container from "@mui/material/Container";
import "./Page.css";

const Page: React.FC = ({children}) => {
  return (
    <div className="page">
      <Container>{children}</Container>
    </div>
  );
};

export default Page;

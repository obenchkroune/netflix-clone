import React from "react";
import "./ShowCase.css";
import { Button } from "@material-ui/core";

function ShowCase() {
  return (
    <div className="showcase">
      <div className="showcase__content">
        <h1>Unlimited movies,</h1>
        <h1>TV shows, and more.</h1>
        <Button size="large">Find Out More </Button>
      </div>
    </div>
  );
}

export default ShowCase;

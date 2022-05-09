import React from "react";
import Typography from "@mui/material/Typography";
import "../CSS/Main.css";

const Main = () => {
  return (
    <div>
      <Typography align="center" variant="h5">
        Star Wars is an American epic space-opera multimedia franchise created by George Lucas,
        <br /> which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.
        <br /> The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time.
      </Typography>
      <div className="row offset-3 mt-5 col-6">
        <iframe src="https://giphy.com/embed/26FmQ6EOvLxp6cWyY" height="350" />
      </div>
    </div>
  );
};

export default Main;

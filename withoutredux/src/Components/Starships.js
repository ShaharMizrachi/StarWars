import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllData } from "../Api/api";
import "../CSS/Starships.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Starships = () => {
  const [starships, setStarships] = useState(null);

  const StarshipsApi = () => {
    const data = AllData.get("/starships"); // why i can not put here awaite nov homo ?
    return data;
  };

  useEffect(() => {
    StarshipsPullData();
  });

  const StarshipsPullData = async () => {
    const data = await StarshipsApi();
    setStarships(data.data.results);
    console.log(data.data.results);
  };
  //style={{ backgroundColor: "transparent" }}
  return (
    <React.Fragment>
      {starships == null ? (
        <div className="row col-4 offset-4">
          <iframe src="https://giphy.com/embed/58Y1tQU8AAhna" width="480" height="349" frameBorder="0" class="giphy-embed" allowFullScreen>
            Loading
          </iframe>
        </div>
      ) : (
        <div className="row col-8 offset-2 mt-4">
          <TableContainer component={Paper} style={{ backgroundColor: "transparent", fontWeight: "bold" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className="color">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Speed(MGLT)</TableCell>
                  <TableCell>Cargo Capacity</TableCell>
                  <TableCell>Cost</TableCell>
                  <TableCell>Consumables</TableCell>
                  <TableCell>Passengers</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {starships.map((starship) => (
                  <TableRow key={starship.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell>{starship.name}</TableCell>
                    <TableCell>{starship.max_atmosphering_speed}</TableCell>
                    <TableCell>{starship.cargo_capacity}</TableCell>
                    <TableCell>{starship.cost_in_credits}</TableCell>
                    <TableCell>{starship.consumables}</TableCell>
                    <TableCell>{starship.passengers}</TableCell>
                    <TableCell>{starship.passengers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </React.Fragment>
  );
};

export default Starships;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllData } from "../Api/api";
import "../CSS/Planets.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Planets = () => {
  const [planets, Setplanets] = useState(null);
  const [tableTitles, setTableTitles] = useState("");

  const planetsData = () => {
    AllData.get("/planets").then((d) => {
      Setplanets(d.data.results);
    });
  };
  useEffect(() => {
    planetsData();
  }, []);

  return (
    <div>
      {planets == null ? (
        <div className="row col-4 offset-4">
          <iframe src="https://giphy.com/embed/58Y1tQU8AAhna" width="480" height="349" frameBorder="0" class="giphy-embed" allowFullScreen>
            Loading
          </iframe>
        </div>
      ) : (
        <React.Fragment>
          <div className="row col-4 offset-4 mt-4 mb-5">
            <iframe src="https://giphy.com/embed/spp5a0cmE833VtG9iz" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>
          <div className="row">
            {planets.map((planet) => (
              <div className="rounded-list col-2 offset-1">
                <ol>
                  <li>
                    <span>Name: {planet.name}</span>
                  </li>
                  <li>
                    <span>Gravity: {planet.gravity}</span>
                  </li>
                  <li>
                    <span>Population: {planet.population}</span>
                  </li>
                  <li>
                    <span>Rotation Period: {planet.rotation_period}</span>
                  </li>
                  <li>
                    <span>Terrain: {planet.terrain}</span>
                  </li>
                </ol>
              </div>
            ))}
          </div>
        </React.Fragment>
      )}
      ;
    </div>
  );
};

export default Planets;

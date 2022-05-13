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

  const planetsData = async () => {
    const planetsJson = await AllData.get("/planets").then((d) => {
      Setplanets(d.data.results);
    });
    console.log(planetsJson); // over here i'm getting undefind, why ? same problam as before.
  };
  useEffect(() => {
    planetsData();
  }, []);

  return (
    <div>
      <div className="row col-12 mt-4">
        <iframe src="https://giphy.com/embed/spp5a0cmE833VtG9iz" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      {planets == null
        ? null
        : planets.map((planet) => {
            return (
              <div className="shahar">
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
            );
          })}
      ;
    </div>
  );
};

export default Planets;

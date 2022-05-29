import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllData } from "../Api/api";

const Vehicles = () => {
  const [vehiclesD, setVehiclesD] = useState(null);

  useEffect(() => {
    datapull();
  }, []);

  const datapull = async () => {
    const data = await AllData.get("/vehicles");
    setVehiclesD(data.data.results);
  };

  //https://c.tenor.com/y03uTIn0f18AAAAC/carro-check-engine.gif
  return (
    <div>
      {vehiclesD == null ? (
        <div className="row col-4 offset-4 mt-4">
          <img src="https://c.tenor.com/y03uTIn0f18AAAAC/carro-check-engine.gif" alt="car loading" />
        </div>
      ) : (
        vehiclesD.map((vehicle) => {})
      )}
    </div>
  );
};

export default Vehicles;

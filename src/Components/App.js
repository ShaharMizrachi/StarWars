import React, { useEffect, useState } from "react";
import "../CSS/App.css";
import { Route, Link, Switch, Routes } from "react-router-dom";
import Planets from "./Planets.js";
import SearchBar from "./SearchBar.js";
import Starships from "./Starships.js";
import Vehicles from "./Vehicles.js";
import Character from "./Character.js";
import Charecters from "./Characters.js";
import Films from "./Films.js";
import { allCharacters, singleCharacter } from "../Api/api.js";
import Main from "./Main.js";

const App = () => {
  return (
    <div>
      <div className="container">
        <header>
          <div className="row offset-3 mt-4">
            <a href="/" title="Image from freepnglogos.com">
              <img src="https://www.freepnglogos.com/uploads/star-wars-logo-design-14.png" width="400" alt="star wars logo design" style={{ color: "gray", translate: 10 }} />
            </a>
          </div>
        </header>
      </div>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Charecters" element={<Charecters />} />
          <Route path="/Planets" element={<Planets />} />
          <Route path="/Starships" element={<Starships />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          {/* <Route path="/Films" element={<Films />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;

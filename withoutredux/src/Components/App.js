import React, { useEffect, useState } from "react";
import "../CSS/App.css";
import { Route, Link, Switch, Routes } from "react-router-dom";
import Planets from "./Planets";
import SearchBar from "./SearchBar";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Character from "./Character";
import Charecters from "./Characters";
import Films from "./Films";
import { allCharacters, singleCharacter } from "../Api/api.js";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <div className="container">
        <header>
          <div className="row offset-4 mt-2">
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
          <Route path="/Films" element={<Films />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

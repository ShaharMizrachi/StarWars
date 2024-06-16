import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { singleCharacter } from "../Api/api";

const Character = (props) => {
  const [characterDetalis, setCharacterDetalis] = useState(null);

  const characterData = async () => {
    const myData = await singleCharacter.get(`${props.idClicked}.json`).then((d) => {
      setCharacterDetalis(d.data);
    });
  };

  useEffect(() => {
    characterData();
  }, []);

  return (
    <div className="popMain">
      <div>
        <Typography variant="h4">Character Detalis</Typography>
      </div>
      <div>
        {characterDetalis === null ? null : (
          <h3>
            <ul>
              <li>{characterDetalis.gender}</li>
              <li>{characterDetalis.height}</li>
              <li>{characterDetalis.eyeColor}</li>
              <li>{characterDetalis.skinColor}</li>
              <li>{characterDetalis.species}</li>
              <li>{characterDetalis.homeworld}</li>
              <li>
                <a href={characterDetalis.wiki}>wiki</a>
              </li>
            </ul>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Character;

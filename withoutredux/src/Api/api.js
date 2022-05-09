import React from "react";
import axios from "axios";

export const allCharacters = async () => {
  try {
    const allCharactersData = await axios.get("https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json");
    const arrAllCharacters = Object.values(allCharactersData.data);
    return arrAllCharacters;
  } catch (e) {
    console.log(e);
  }
};

export const singleCharacter = axios.create({
  baseURL: `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/`,
});

//"planets","starships""vehicles""species""films"
export const AllData = async (mydata) => {
  try {
    axios.create({
      baseURL: `https://swapi.dev/api/${mydata}/`,
    });
  } catch (e) {
    console.log(e);
  }
};

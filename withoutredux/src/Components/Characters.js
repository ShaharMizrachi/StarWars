import React, { useEffect, useState } from "react";
import Character from "./Character.js";
import "../CSS/Charecters.css";

import { allCharacters } from "../Api/api.js";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Charecters = () => {
  const [characters, setCharacters] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(-1);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedId(-1);
  };
  const test = (id) => {
    console.log(id);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    dataAllCharacters();
  }, []);

  const dataAllCharacters = async () => {
    const data = await allCharacters();
    setCharacters(data);
  };

  const nullCase = () => {
    // why i have this can i do it in other why?
    return <div>test</div>;
  };

  return (
    <div>
      {characters == null ? null : (
        <ImageList className="row col-10 offset-1">
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div" />
          </ImageListItem>
          {characters.map((item) => (
            <ImageListItem sx={{ width: 400 }}>
              <img src={`${item.image}`} alt={item.name} loading="lazy" />
              <div className="row offset-2">
                <ImageListItemBar
                  title={item.name}
                  subtitle={item.species}
                  actionIcon={
                    <IconButton onClick={(e) => handleClick(e, item.id)} sx={{ color: "rgba(255, 255, 255, 0.54)" }} aria-label={`info about ${item.name}`}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
                <div>
                  {selectedId === item.id && (
                    <Popover
                      className="row col-2"
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <div className="row col-5 ">
                        <Character idClicked={item.id} />
                      </div>
                    </Popover>
                  )}
                </div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export default Charecters;

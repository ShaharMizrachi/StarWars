import { Link } from "react-router-dom";
import "../CSS/SearchBar.css";
import useSound from "use-sound";
import boopSfx from "../pic/Sound.mp3";

const SearchBar = () => {
  const [play] = useSound(boopSfx);
  return (
    <div className="row col-4 offset-4 page__menu page__custom-settings menu">
      <ul className="menu__list r-list">
        <li className="row menu__group">
          <Link className="menu__link r-link" to="/Charecters" onClick={play}>
            Charecters
          </Link>
        </li>
        <li>
          <Link className="menu__link r-link" to="/Planets" onClick={play}>
            Planets
          </Link>
        </li>
        <li>
          <Link className="menu__link r-link" to="/Starships" onClick={play}>
            Starships
          </Link>
        </li>
        <li>
          <Link className="menu__link r-link" to="/Vehicles" onClick={play}>
            Vehicles
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;

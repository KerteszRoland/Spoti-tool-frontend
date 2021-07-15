import { Link } from "react-router-dom";

import Tovabb from "../images/tovabb-btn.svg";
import Icons from "../images/icons.svg";

const Landing = () => {
  return (
    <div className="content-wrapper">
      <div className="middle-content">
        <div className="hero">
          <span className="h0">Kiegészítő eszközök Spotify-ra!</span>
          <span className="body-text">
            Tedd színesebbé alkalmazásod, és örökítsd meg lejátszási listáidat,
            melyet megoszthathatsz barátaiddal is.
          </span>
          <Link className="btn-tovabb no-dec" to="/tools">
            <img src={Tovabb} alt="" />
          </Link>
        </div>
        <div className="icon-group">
          <img src={Icons} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;

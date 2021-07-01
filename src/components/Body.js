import Tovabb from "../images/tovabb-btn.svg"
import Icons from "../images/icons.svg"

//import Card from "./Card"
//import Heart from "../images/heart-card.svg"
//import Calendar from "../images/calendar-card.svg"
//import Pause from "../images/pause.svg"

function Body(){
    return (
        <div className="content-wrapper">
        <div className="middle-content">
          <div className="hero">
            <span className="h0">Kiegészítő eszközök Spotify-ra!</span>
            <span className="body-text">
              Tedd színesebbé alkalmazásod, és örökítsd meg lejátszási listáidat,
              melyet megoszthathatsz barátaiddal is.
            </span>
            <button className="btn-tovabb">
              <img src={Tovabb} alt="" />
            </button>
          </div>
          <div className="icon-group">
            <img src={Icons} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Body;
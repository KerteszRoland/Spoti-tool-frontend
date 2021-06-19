import Card from "./Card"
import Tovabb from "../images/tovabb-btn.svg"
import Icons from "../images/icons.svg"

import Heart from "../images/heart-card.svg"
import Calendar from "../images/calendar-card.svg"
import Pause from "../images/pause.svg"

function Body(){
    return (
        <section>
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
        <div className="lower-content">
          <Card img={Pause} desc="Heti felfedezés lejátszási lista mentése."/>
          <Card img={Calendar} desc="Időkapszula készítése, mely besorolja kedvenc zenéidet az elmúlt hónapokra."/>
          <Card img={Heart} desc="Kedvenc zenék mentése egy lejátszási listába."/>
        </div>
      </section>
    );
}

export default Body;
import Card from "../components/Card";

import Calendar from "../images/calendar-card.svg";
import Heart from "../images/heart-card.svg";
import Clock from "../images/clock-card.svg";

const Tools = () => {
  function SendRequest(endpoint) {
    const url = `http://localhost:5000/api/${endpoint}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: { asd: "asd" },
    });
  }

  function SaveDiscoverWeekly() {
    const url = "http://localhost:5000/api/discover_weekly";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: { asd: "asd" },
    });
  }

  function CreateTimeCapsule() {
    const url = "http://localhost:5000/api/time_capsule";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: { asd: "asd" },
    });
  }

  return (
    <div className="middle-content">
      <Card
        img={Calendar}
        desc="Heti kaland lejátszás lista mentése."
        onClick={SendRequest}
        endpoint="discover_weekly"
      />
      <Card
        img={Heart}
        desc="Kedvenc zenék mentése egy lejátszás listába."
        onClick={SendRequest}
        endpoint="liked_songs"
      />
      <Card
        img={Clock}
        desc="Időkapszula készítése, mely besorolja kedvenc zenéidet az elmúlt hónapokra."
        onClick={SendRequest}
        endpoint="time_capsule"
      />
    </div>
  );
};

export default Tools;

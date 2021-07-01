import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import Body from "../components/Body";

const Dashboard = () => {
  const history = useHistory();

  function SendCode() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    if (Object.keys(params).length) {
      const code = params["code"];
      const data = { code: code };
      const url = "http://localhost:5000/api/login";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
    }
  }

  function SaveLikedSongs() {
    const url = "http://localhost:5000/api/liked_songs";
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


  useEffect(() => {
    SendCode();
    history.push("/dashboard");
  });

  return (
    <div>
      <input type="button" value="Save Liked Songs" onClick={SaveLikedSongs} />
      <input type="button" value="Save Discover Weekly" onClick={SaveDiscoverWeekly} />
      <input type="button" value="Create Time Capsule" onClick={CreateTimeCapsule} />
    </div>
  );
};

export default Dashboard;

import { useEffect } from "react";
import Video from "./components/Video/Video";
import "./App.css";

const Home = () => {
  useEffect(() => {
    if (!navigator.onLine) alert("Connect to internet!");
  }, [navigator]);
  return (
    <VideoState>
      <div className="App" style={{ height: "100%", width: "100%" }}>
        <Video />
        <Options />
      </div>
    </VideoState>
  );
};

export default Home;

import React from "react";
import Banner from "./Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <h2>Home Page</h2>
      </div>
    </div>
  );
}

export default Home;

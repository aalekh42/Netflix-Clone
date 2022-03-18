import React from "react";
import "../HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner/>
      <Row category="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row category="COMEDY" fetchUrl={requests.fetchComedyMovies} />
      <Row category="DOCUMENTARY" fetchUrl={requests.fetchDocumentaries} />
      <Row category="HORROR" fetchUrl={requests.fetchHorrorMovies} />
      <Row category="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default HomeScreen;

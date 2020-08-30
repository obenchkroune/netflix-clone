import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ShowCase from "./components/ShowCase/ShowCase";
import MoviesGroup from "./components/MoviesGroup/MoviesGroup";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* ShowCase */}
      <ShowCase />

      {/* SLIDES */}
      {/* --> MovieCardCollection */}
      {/* ----> MovieCard */}
      <MoviesGroup />
      <MoviesGroup category="Upcomming" />
      <MoviesGroup category="New" />
      <MoviesGroup category="2020" />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

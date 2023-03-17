import React from "react";
import MainWrapper from "./MainWrapper";
import Hello from "./Hello";
import Personal from "./Personal";
import Header from "./Header";
import ListOfFilms from "./ListOfFilms";

function App() {

  return (
    <div>
      <Header/>
      <MainWrapper/>
        <Hello/>
        <Personal/>
        <ListOfFilms/>
      <MainWrapper/>
    </div>
  );
}

export default App;

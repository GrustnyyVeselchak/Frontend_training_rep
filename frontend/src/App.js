import React from "react";
import MainWrapper from "./MainWrapper";
import Hello from "./Hello";
import Personal from "./Personal";
import Header from "./Header";
import SearchBar from "./SearchBar";
import SumbitEmail from "./SubmitEmail";

function App() {

  return (
    <div>
      <Header/>
      <MainWrapper/>
        <Hello/>
        <Personal/>
        <SearchBar/>
        <SumbitEmail/>
      <MainWrapper/>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <Header/>
      </section>
      <section>
        <Project/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}

export default App;

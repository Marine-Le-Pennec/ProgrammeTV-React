import React from "react";
import data from "./data.json";
import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <body>
        {" "}
        <header>
          <img
            src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/M6_2009.svg/1200px-M6_2009.svg.png"
            alt="logo M6"
          ></img>
        </header>
        <div className="container">
          <main>
            {data.map((elem, index) => {
              return <Section category={elem}></Section>;
            })}
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;

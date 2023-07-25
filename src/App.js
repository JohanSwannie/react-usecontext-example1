import React, { useState } from "react";
import ClassComponentWithContext from "./ClassComponentWithContext";
import FunctionalComponentWithContext from "./FunctionalComponentWithContext";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [counter, setCounter] = useState(0);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setCounter((prevCounter) => prevCounter + 1);

    const butterBoy = document.getElementById("butty");

    if (!darkTheme) {
      document.body.style.backgroundColor = "navy";
      butterBoy.style.backgroundColor = "lightblue";
      butterBoy.style.color = "black";
    } else {
      document.body.style.backgroundColor = "lightseagreen";
      butterBoy.style.backgroundColor = "lightgreen";
      butterBoy.style.color = "black";
    }
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <div style={{ width: "40%", marginLeft: "30%", marginRight: "30%" }}>
          <button id="butty" onClick={toggleTheme}>
            Toggle Theme
          </button>
          <p className="cntr">Toggle Counter = {counter}</p>
          <FunctionalComponentWithContext />
          <ClassComponentWithContext />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

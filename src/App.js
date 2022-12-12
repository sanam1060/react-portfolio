import "./App.css";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import Portfolio from "./Components/Portfolio";
import { useState } from "react";

function App() {
    // Navigation links
    const [navLinks] = useState([
      {
        name: "About Me",
      },
      {
        name: "Portfolio",
      },
      {
        name: "Contact",
      },
    ]);
    // Default
    const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);
  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setCurrentNavLink={setCurrentNavLink}
      ></Nav>
      <main>
        {currentNavLink.name === "About Me" && <AboutMe />}
        {currentNavLink.name === "Portfolio" && <Portfolio />}
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
function Portfolio() {
  const [projects] = useState([
    {
      name: "News Translator",
      deployedUrl: "https://sanam1060.github.io/team-project-one/",
      githubRepo: "https://github.com/sanam1060/team-project-one",
    },
  ]);
  return <section projects={projects}></section>;
}

export default Portfolio;

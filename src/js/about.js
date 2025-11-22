import getData from "./utils/getData.js";
import getDataGithub from "./utils/getDataGithub.js";

import loader from "./components/loader.js";
import badRequest from "./components/badRequest.js";
import github from "./components/github.js";
import about from "./components/about.js";

const mountHTML = (data, element) => {
  element.innerHTML = "";

  if (data !== null) {
    element.innerHTML += github(data.githubUser);

    element.innerHTML += about(data.aboutData);
  } else {
    element.innerHTML = badRequest();
  }
};

window.onload = async () => {
  const aboutEl = document.querySelector(".about");
  const githubUser = await getDataGithub("/gw-devf");
  const aboutData = await getData("/about");

  aboutEl.innerHTML = loader();

  mountHTML({ githubUser, aboutData }, aboutEl);
};

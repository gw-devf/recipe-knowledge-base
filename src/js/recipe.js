import getData from "./utils/getData.js";
import findCategoryName from "./utils/findCategoryName.js";
import recipeComponent from "./components/recipe.js";
import badRequest from "./components/badRequest.js";

const mountRecipe = (recipeClicked, categories, recipeEl) => {
  recipeEl.innerHTML = "";

  if (recipeClicked !== null && categories !== null) {
    const category = findCategoryName(categories, recipeClicked.category);
    recipeEl.innerHTML += recipeComponent(recipeClicked, category);
  } else {
    recipeEl.innerHTML = badRequest();
  }
};

window.onload = async () => {
  if (localStorage.getItem("recipeId") === null) {
    window.location.href = "../src/index.html";
  }

  const recipes = await getData("/recipes");
  const categories = await getData("/categories");
  const [recipeClicked] = recipes.filter(
    (recipe) => recipe.id === Number(localStorage.getItem("recipeId")),
  );
  const recipeEl = document.querySelector(".recipe");

  mountRecipe(recipeClicked, categories, recipeEl);

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    window.location.href = "../src/index.html";
    localStorage.removeItem("recipeId");
  });
};

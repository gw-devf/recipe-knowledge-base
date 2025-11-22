import getData from "./utils/getData.js";
import findCategoryName from "./utils/findCategoryName.js";
import recipe from "./components/recipe.js";

window.onload = async () => {
  if (localStorage.getItem("recipeId") === null) {
    window.location.href = "../src/index.html";
  }

  const recipes = await getData("/recipes");
  const categories = await getData("/categories");
  const [recipeClicked] = recipes.filter(
    (recipe) => recipe.id === Number(localStorage.getItem("recipeId")),
  );
  const category = findCategoryName(categories, recipeClicked.category);
  const recipeEl = document.querySelector(".recipe");

  recipeEl.innerHTML = recipe(recipeClicked, category);

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    window.location.href = "../src/index.html";
    localStorage.removeItem("recipeId");
  });
};

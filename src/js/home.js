import getData from "./utils/getData.js";
import findCategoryName from "./utils/findCategoryName.js";
import recipesList from "./components/recipesList.js";

const mountListRecipes = (recipes, categories, recipesListEl) => {
  if (recipes !== null && categories !== null) {
    recipes.forEach((recipe) => {
      const category = findCategoryName(categories, recipe.category);

      recipesListEl.innerHTML += recipesList(recipe, category);
    });
  }
};

window.onload = async () => {
  const recipes = await getData("/recipes");
  const categories = await getData("/categories");
  const recipesListEl = document.querySelector(".recipes-list");
  const searchInputEl = document.querySelector("#searchRecipe");
  const searchButtonEl = document.querySelector("#searchButton");

  mountListRecipes(recipes, categories, recipesListEl);

  searchButtonEl.addEventListener("click", () => {
    const searchValue = searchInputEl.value;

    const recipeSearched = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    recipesListEl.innerHTML = "";
    recipeSearched.forEach((recipe) => {
      const category = findCategoryName(categories, recipe.category);

      recipesListEl.innerHTML += recipesList(recipe, category);
    });
  });
};

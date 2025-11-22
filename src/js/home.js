import getData from "./utils/getData.js";
import findCategoryName from "./utils/findCategoryName.js";
import recipesList from "./components/recipesList.js";
import loader from "./components/loader.js";
import badRequest from "./components/badRequest.js";

const mountListRecipes = (recipes, categories, recipesListEl) => {
  recipesListEl.innerHTML = "";

  if (recipes !== null && categories !== null) {
    recipes.forEach((recipe) => {
      const category = findCategoryName(categories, recipe.category);

      recipesListEl.innerHTML += recipesList(recipe, category);
    });
  } else {
    recipesListEl.innerHTML = badRequest();
  }
};

window.onload = async () => {
  const recipesListEl = document.querySelector(".recipes-list");

  recipesListEl.innerHTML = loader();

  const recipes = await getData("/recipes");
  const categories = await getData("/categories");
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

  const recipeEl = document.querySelectorAll(".recipes-list__item");

  recipeEl.forEach((recipe) => {
    recipe.addEventListener("click", () => {
      const recipeId = recipe.getAttribute("data-id");

      localStorage.setItem("recipeId", recipeId);
      window.location.href = "../src/recipe.html";
    });
  });
};

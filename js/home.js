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

const clickRecipeListener = () => {
  const recipeEl = document.querySelectorAll(".recipes-list__item");

  if (recipeEl.length)
    recipeEl.forEach((recipe) => {
      recipe.addEventListener("click", () => {
        const recipeId = recipe.getAttribute("data-id");

        localStorage.setItem("recipeId", recipeId);
        window.location.href =
          "https://gw-devf.github.io/recipe-knowledge-base/recipe.html";
      });
    });
};

window.onload = async () => {
  const recipesListEl = document.querySelector(".recipes-list");
  const btnRandomReciteEl = document.querySelector(".button_random-recipe");

  recipesListEl.innerHTML = loader();

  const recipes = await getData("/recipes");
  const categories = await getData("/categories");
  const searchInputEl = document.querySelector("#searchRecipe");
  const searchButtonEl = document.querySelector("#searchButton");

  mountListRecipes(recipes, categories, recipesListEl);
  recipesListEl.classList.add("recipes-list--animated");

  clickRecipeListener();

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
    clickRecipeListener();
  });

  btnRandomReciteEl.addEventListener("click", () => {
    const randomRecipeId = Math.floor(Math.random() * recipes.length) + 1;

    localStorage.setItem("recipeId", randomRecipeId);
    window.location.href =
      "https://gw-devf.github.io/recipe-knowledge-base/recipe.html";
  });
};

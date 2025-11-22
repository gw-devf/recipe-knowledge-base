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
        window.location.href = "/recipe.html";
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

  searchButtonEl.addEventListener("click", (event) => {
    event.preventDefault();
    const searchValue = searchInputEl.value;

    if (recipes === null) {
      alert("Erro na requisição dos dados. Tente novamente mais tarde.");
      return;
    }

    const recipeSearched = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchValue.toLowerCase()),
    );

    recipesListEl.innerHTML = "";
    if (recipeSearched.length) {
      recipeSearched.forEach((recipe) => {
        const category = findCategoryName(categories, recipe.category);

        recipesListEl.innerHTML += recipesList(recipe, category);
      });
      clickRecipeListener();
    } else {
      recipesListEl.innerHTML = `<div class="not-found-search">Não temos uma receita de "${searchValue}" 😔. Procure por outra receita que temos no catálogo 😉"</div>`;
    }
  });

  btnRandomReciteEl.addEventListener("click", () => {
    if (recipes === null) {
      alert("Erro na requisição dos dados. Tente novamente mais tarde.");
      return;
    }

    const randomRecipeId = Math.floor(Math.random() * recipes.length) + 1;

    localStorage.setItem("recipeId", randomRecipeId);
    window.location.href = "/recipe.html";
  });
};

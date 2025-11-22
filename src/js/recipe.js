import getData from "./utils/getData.js";
import findCategoryName from "./utils/findCategoryName.js";

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

  recipeEl.innerHTML = `
    <button>Voltar</button>

    <div>
      <h4><span>Categoria:</span> ${category.name}</h4>
      <h4><span>Última atualização:</span> ${recipeClicked.updated_at}</h4>
    </div>

    <h1>${recipeClicked.name}</h1>

    <div>
    <img src="${recipeClicked.img}" alt="${recipeClicked.name}/>

      <div>
        <div>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 5.25V1.75H26.25V5.25H15.75ZM19.25 24.5H22.75V14H19.25V24.5ZM21 38.5C18.8417 38.5 16.8073 38.0844 14.8969 37.2531C12.9865 36.4219 11.3167 35.2917 9.8875 33.8625C8.45833 32.4333 7.32812 30.7635 6.49687 28.8531C5.66562 26.9427 5.25 24.9083 5.25 22.75C5.25 20.5917 5.66562 18.5573 6.49687 16.6469C7.32812 14.7365 8.45833 13.0667 9.8875 11.6375C11.3167 10.2083 12.9865 9.07812 14.8969 8.24687C16.8073 7.41562 18.8417 7 21 7C22.8083 7 24.5437 7.29167 26.2062 7.875C27.8687 8.45833 29.4292 9.30417 30.8875 10.4125L33.3375 7.9625L35.7875 10.4125L33.3375 12.8625C34.4458 14.3208 35.2917 15.8812 35.875 17.5437C36.4583 19.2062 36.75 20.9417 36.75 22.75C36.75 24.9083 36.3344 26.9427 35.5031 28.8531C34.6719 30.7635 33.5417 32.4333 32.1125 33.8625C30.6833 35.2917 29.0135 36.4219 27.1031 37.2531C25.1927 38.0844 23.1583 38.5 21 38.5ZM21 35C24.3833 35 27.2708 33.8042 29.6625 31.4125C32.0542 29.0208 33.25 26.1333 33.25 22.75C33.25 19.3667 32.0542 16.4792 29.6625 14.0875C27.2708 11.6958 24.3833 10.5 21 10.5C17.6167 10.5 14.7292 11.6958 12.3375 14.0875C9.94583 16.4792 8.75 19.3667 8.75 22.75C8.75 26.1333 9.94583 29.0208 12.3375 31.4125C14.7292 33.8042 17.6167 35 21 35Z"/>
          </svg>

          <span>${recipeClicked.time}</span>
        </div>

        <div>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 38.5C7.7875 38.5 6.96354 38.1573 6.27812 37.4719C5.59271 36.7865 5.25 35.9625 5.25 35V15.2687C4.725 14.9479 4.30208 14.5323 3.98125 14.0219C3.66042 13.5115 3.5 12.9208 3.5 12.25V7C3.5 6.0375 3.84271 5.21354 4.52812 4.52812C5.21354 3.84271 6.0375 3.5 7 3.5H35C35.9625 3.5 36.7865 3.84271 37.4719 4.52812C38.1573 5.21354 38.5 6.0375 38.5 7V12.25C38.5 12.9208 38.3396 13.5115 38.0187 14.0219C37.6979 14.5323 37.275 14.9479 36.75 15.2687V35C36.75 35.9625 36.4073 36.7865 35.7219 37.4719C35.0365 38.1573 34.2125 38.5 33.25 38.5H8.75ZM8.75 15.75V35H33.25V15.75H8.75ZM7 12.25H35V7H7V12.25ZM15.75 24.5H26.25V21H15.75V24.5Z" />
          </svg>

          <span>${recipeClicked.amount} ${
    recipeClicked.amount === 1 ? "porção" : "porções"
  }</span>
        </div>
      </div>
    >
    </div>

    
  `;
};

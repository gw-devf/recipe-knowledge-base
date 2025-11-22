export default function recipesList(recipe, category) {
  return `
    <article class="recipes-list__item" data-id="${recipe.id}">
      <div class="recipes-list__content-wrapper">
        <img class="recipes-list__img" src="${recipe.img}" alt="${recipe.name}" />

        <div class="recipes-list__content">
          <h2 class="recipes-list__content__title">${recipe.name}</h2>
          <p class="recipes-list__content__description">${recipe.description}</p>

          <div class="recipes-list__content_category-wrapper">
            <svg class="category-wrapper__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
            </svg>

            <span class="category-wrapper__description">${category.name}</span>
          </div>

          <h5 class="recipes-list__content__updated-at"><b>Última atualização:</b> ${recipe.updated_at}</h5>
        </div>
      </div>

      <span class="recipes-list__arrow">
        <img src="../../assets/arrow.svg" alt="Ícone flecha" />
      </span>
    </article>
  `;
}

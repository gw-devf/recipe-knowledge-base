export default function findCategoryName(categories, recipeCategoryId) {
  const [category] = categories.filter(
    (category) => category.id === recipeCategoryId,
  );

  return category;
}

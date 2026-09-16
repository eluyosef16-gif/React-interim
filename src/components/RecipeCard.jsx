function RecipeCard({ title, image, description, ingredients }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <h4>Ingredients</h4>

      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCard;

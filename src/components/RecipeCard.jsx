function RecipeCard({ title, image, description }) {
  return (
    <article>
      <h3>
        <a href="/recipe">{title}</a>
      </h3>

      <img src={image} alt={title} />

      <p>{description}</p>
    </article>
  );
}

export default RecipeCard;
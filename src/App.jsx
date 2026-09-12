import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";

function App() {
  const recipes = [
    {
      title: "Vegetable Soup",
      image: "/images/vegetable-soup.jpg",
      description:
        "A delicious and comforting vegetable soup made with fresh vegetables and a flavorful broth.",
    },
    {
      title: "Grilled Chicken Sandwich",
      image: "/images/grilled-chicken-sandwich.png",
      description:
        "A tasty grilled chicken sandwich made with tender chicken, fresh vegetables, and bread.",
    },
    {
      title: "Doro Wat",
      image: "/images/doro-wat.jpg",
      description:
        "A traditional Ethiopian chicken stew prepared with spices, onions, and a rich sauce.",
    },
  ];

  return (
    <>
      <Header />

      <main>
        <p>
          Welcome to the Hiruy Recipe Platform, a place to discover and
          explore delicious recipes from different cuisines. Find simple
          recipes, learn how to prepare them, and enjoy cooking at home.
        </p>

        <h2>Recipes</h2>

        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.title}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
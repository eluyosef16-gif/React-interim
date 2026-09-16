import { useState } from "react";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer";

function App() {
  // State for showing and hiding recipes
  const [showRecipes, setShowRecipes] = useState(true);

  // State for the search input
  const [searchTerm, setSearchTerm] = useState("");

  // Recipe data
  const recipes = [
    {
      title: "Vegetable Soup",
      image: "/images/vegetable-soup.jpg",
      description:
        "A delicious and comforting vegetable soup made with fresh vegetables and a flavorful broth.",
      ingredients: ["Carrots", "Potatoes", "Onions", "Tomatoes"],
    },
    {
      title: "Grilled Chicken Sandwich",
      image: "/images/grilled-chicken-sandwich.png",
      description:
        "A tasty grilled chicken sandwich made with tender chicken, fresh vegetables, and bread.",
      ingredients: ["Chicken", "Bread", "Lettuce", "Tomato"],
    },
    {
      title: "Doro Wat",
      image: "/images/doro-wat.jpg",
      description:
        "A traditional Ethiopian chicken stew prepared with spices, onions, and a rich sauce.",
      ingredients: ["Chicken", "Onions", "Berbere", "Eggs"],
    },
  ];

  // Filter recipes based on search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        {/* User Input */}
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <br />
        <br />

        {/* State and Interactivity */}
        <button onClick={() => setShowRecipes(!showRecipes)}>
          {showRecipes ? "Hide Recipes" : "Show Recipes"}
        </button>

        {/* Render list dynamically using map */}
        {showRecipes && (
          <div className="recipe-list">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.title}
                title={recipe.title}
                image={recipe.image}
                description={recipe.description}
                ingredients={recipe.ingredients}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;

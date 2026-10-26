import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
    description: "A low-maintenance plant perfect for indoor spaces.",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500",
    description: "A beautiful plant with elegant green leaves.",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500",
    description: "A hardy succulent that is easy to care for.",
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500",
    description: "A compact succulent ideal for desks and shelves.",
  },
  {
    id: 5,
    name: "Monstera",
    category: "Indoor Plants",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500",
    description: "A tropical plant known for its distinctive leaves.",
  },
  {
    id: 6,
    name: "Echeveria",
    category: "Succulents",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500",
    description: "A decorative rosette-shaped succulent.",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [selectedCategory, setSelectedCategory] =
    React.useState("All");

  const categories = [
    "All",
    ...new Set(plants.map((plant) => plant.category)),
  ];

  const filteredPlants =
    selectedCategory === "All"
      ? plants
      : plants.filter(
          (plant) => plant.category === selectedCategory
        );

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-page">
      <header className="product-header">
        <h1>Paradise Nursery</h1>
        <p>Bring nature home, one plant at a time.</p>
      </header>

      <section className="product-section">
        <h2>Our Plants</h2>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredPlants.map((plant) => (
            <article className="product-card" key={plant.id}>
              <img
                src={plant.image}
                alt={plant.name}
                className="product-image"
              />

              <div className="product-info">
                <h3>{plant.name}</h3>
                <p className="product-category">
                  {plant.category}
                </p>
                <p className="product-description">
                  {plant.description}
                </p>
                <p className="product-price">
                  ₹{plant.price}
                </p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;

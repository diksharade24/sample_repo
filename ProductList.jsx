import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import Navbar from "./Navbar";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 299,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 399,
        image: "https://images.unsplash.com/photo-1597055181300-e3633a917c4e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        name: "Areca Palm",
        price: 499,
        image: "https://images.unsplash.com/photo-1632207691143-643e2c7a6923?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 4,
        name: "Spider Plant",
        price: 249,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 449,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 6,
        name: "Boston Fern",
        price: 349,
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Low-Maintenance Plants",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 199,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 8,
        name: "Jade Plant",
        price: 249,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 9,
        name: "ZZ Plant",
        price: 399,
        image: "https://images.unsplash.com/photo-1597055181300-e3633a917c4e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 10,
        name: "Pothos",
        price: 229,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 11,
        name: "Succulent Mix",
        price: 299,
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 12,
        name: "Cast Iron Plant",
        price: 459,
        image: "https://images.unsplash.com/photo-1632207691143-643e2c7a6923?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Decorative Plants",
    plants: [
      {
        id: 13,
        name: "Monstera",
        price: 599,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 14,
        name: "Calathea",
        price: 449,
        image: "https://images.unsplash.com/photo-1597055181300-e3633a917c4e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 15,
        name: "Anthurium",
        price: 499,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 16,
        name: "Fiddle Leaf Fig",
        price: 699,
        image: "https://images.unsplash.com/photo-1632207691143-643e2c7a6923?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 17,
        name: "Chinese Money Plant",
        price: 349,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 18,
        name: "Dracaena",
        price: 399,
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const addedIds = cartItems.map((item) => item.id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <>
      <Navbar />

      <main className="products-page">
        <header className="products-heading">
          <h1>Our Plant Collection</h1>
          <p>
            Find the perfect greenery for your home with
            Paradise Nursery.
          </p>
        </header>

        {plantCategories.map((category) => (
          <section
            className="plant-category"
            key={category.name}
          >
            <h2>{category.name}</h2>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = addedIds.includes(plant.id);

                return (
                  <article
                    className="product-card"
                    key={plant.id}
                  >
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p className="product-price">
                        ₹{plant.price}
                      </p>

                      <button
                        className="primary-btn add-cart-btn"
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default ProductList;

import React from "react";

function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p>Growing happiness, one plant at a time.</p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Paradise Nursery is an online plant shop dedicated to
          helping people bring nature into their homes and
          workplaces. We offer a collection of indoor plants,
          succulents, and flowering plants for plant lovers.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <h2>Our Mission</h2>
          <p>
            To make plants accessible to everyone and encourage
            greener, healthier living spaces.
          </p>
        </article>

        <article className="about-card">
          <h2>Our Vision</h2>
          <p>
            To inspire people to create greener environments
            through convenient online plant shopping.
          </p>
        </article>

        <article className="about-card">
          <h2>Our Values</h2>
          <p>
            We value quality, sustainability, customer
            satisfaction, and a love for nature.
          </p>
        </article>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <p>
          Explore carefully selected plants, discover new
          varieties, and find suitable greenery for your home.
          Our goal is to make your plant-shopping experience
          simple and enjoyable.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;

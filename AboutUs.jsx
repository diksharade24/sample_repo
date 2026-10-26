import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Learn more about our company, our mission, and the
          values that drive us forward.
        </p>
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a technology-driven company focused on developing
          innovative, reliable, and user-friendly solutions.
          Our goal is to solve real-world problems through
          technology, creativity, and collaboration.
        </p>
      </section>

      <section className="about-details">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To deliver effective and innovative solutions that
            create value for our users and make everyday tasks easier.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To become a trusted organization known for innovation,
            quality, and meaningful technological impact.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <p>
            We believe in integrity, teamwork, continuous learning,
            creativity, and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="about-content">
        <h2>What We Do</h2>
        <p>
          We design and develop technology-based solutions by
          combining modern tools, practical ideas, and user-focused
          development to meet evolving needs.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

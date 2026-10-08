import React from "react";
import { Link } from "react-router-dom";

export default function MyHome() {
  return (
    
    <section>
      <p className="muted">Hello, I am</p>
      <h1>Your Name</h1>
      <h3>Java | Spring Boot | Spring AI Developer</h3>
      <p>
        Backend developer with hands-on experience building REST APIs and
        AI-powered applications using Java, Spring Boot and Spring AI.
        Comfortable with RAG, PostgreSQL and React front ends.
      </p>
      <Link className="btn" to="/about">About Me</Link>
      <Link className="btn outline" to="/contact">Contact</Link>
    </section>
  );
}
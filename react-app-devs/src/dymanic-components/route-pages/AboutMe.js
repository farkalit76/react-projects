import React from "react";

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <p>
        Backend developer with hands-on experience building REST APIs and
        AI-powered applications using Java, Spring Boot and Spring AI.
        Comfortable with RAG, PostgreSQL and React front ends.
      </p>

      <div className="section">
        <h2>Experience</h2>

        <div className="job">
          <h3>Senior Software Engineer — Company Name</h3>
          <div className="muted">2022 – Present</div>
          <ul>
            <li>Designed and built microservices using Spring Boot and PostgreSQL.</li>
            <li>Implemented document Q&amp;A (RAG) features with Spring AI.</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Engineer — Previous Company</h3>
          <div className="muted">2019 – 2022</div>
          <ul>
            <li>Developed REST APIs and internal tools.</li>
            <li>Improved test coverage and release process.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="job">
          <h3>B.Tech, Computer Science</h3>
          <div className="muted">University Name · 2015 – 2019</div>
        </div>
      </div>
    </>
  );
}
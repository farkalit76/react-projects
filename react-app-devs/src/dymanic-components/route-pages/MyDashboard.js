import React from "react";

export default function MyDashboard() {
    
  return (
    <>
      <h1>Dashboard</h1>

      <div className="grid">
        <div className="card">
          <div className="stat-number">5+</div>
          <div className="muted">Years Experience</div>
        </div>
        <div className="card">
          <div className="stat-number">20+</div>
          <div className="muted">Projects Delivered</div>
        </div>
        <div className="card">
          <div className="stat-number">15+</div>
          <div className="muted">Technologies</div>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>

        <div className="skill">
          <div className="skill-head"><span>Java</span><span>90%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: "90%" }} /></div>
        </div>

        <div className="skill">
          <div className="skill-head"><span>Spring Boot</span><span>88%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: "88%" }} /></div>
        </div>

        <div className="skill">
          <div className="skill-head"><span>Spring AI / RAG</span><span>70%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: "70%" }} /></div>
        </div>

        <div className="skill">
          <div className="skill-head"><span>PostgreSQL</span><span>80%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: "80%" }} /></div>
        </div>

        <div className="skill">
          <div className="skill-head"><span>React</span><span>65%</span></div>
          <div className="bar"><div className="bar-fill" style={{ width: "65%" }} /></div>
        </div>
      </div>
    </>
  );
}
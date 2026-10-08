import React from "react"
import { Link } from "react-router-dom"

export default function Home(){

    React.useEffect(() => {
          document.title = "Farkalit Usman | Java Consultant | Senior Java Developer"
      }, []);
    
    return (
       <div className="page-container">
            <section className="hero">
                <div className="hero-content">

                <div className="hero-small">Hello, I'm</div>

                <h1>Farkalit Usman </h1>
                    
                 <h2>
                    <span>Java Senior Developer</span>
                </h2>   

                <p>
                   Senior Java Technical Consultant with 20+ years of software engineering experience, 
                   including extensive hands-on delivery with Java, Spring Boot, REST APIs, JPA/Hibernate,
                   microservices, Kafka, Redis, SQL/NoSQL databases, Docker and MS Azure. 
                </p>
                <p>
                    Strong background in architecture, technical design, backend development, integration,
                    testing, CI/CD and production deployment across banking, payments, government, 
                    airline, e-commerce and telecom/CTI domains.
                </p>
                <p>
                    Currently working with Java 17, Spring Boot 3.x, Spring Security/Keycloak and Spring AI, 
                    including agentic AI workflows with Ollama. Experienced in translating business requirements 
                    into scalable APIs and production-ready services and working with distributed Agile teams

                </p>

                <div className="btn-group">
                    <Link to="/contact" className="btn btn-primary">
                        Contact Me
                    </Link>

                    <Link to="/about" className="btn btn-secondary">
                        View My Skills
                    </Link>
                </div>

                </div>
            </section>
        </div>
    )
}

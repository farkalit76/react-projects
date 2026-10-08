import React from "react"

export default function About(){

    React.useEffect(() => {
          document.title = "Farkalit Usman | Java Consultant | Senior Java Developer"
      }, []);
    
    return (
       <div className="page-container">

            <div className="page-header">
                <h1>About Me</h1>
                <p>Senior Java Technical Consultant | Java 17 | Spring Boot | Microservices | Cloud</p>
                 <p>
                    More than 20+ years of software engineering experience, 
                    including extensive hands-on delivery with Java, Spring Boot, REST APIs, JPA/Hibernate, 
                    microservices, Kafka, Redis, SQL/NoSQL databases, Docker and MS Azure.
                </p>

            </div>

            <div className="card">
                <h2>PROFESSIONAL SKILLS</h2>

                <p>
                I am a fullstack developer interested in building
                clean and modern app & web applications.
                </p>

                <div className="skills">
                    <span className="skill">Java, JEE</span>
                    <span className="skill">Spring, Spring-boot</span>
                    <span className="skill">Spring AI (LLM, RAG, Agnetic AI)</span>
                    <span className="skill">JPA/Hibernate</span>
                    <span className="skill">Apache Kafka, Rabbit MQ</span>
                    <span className="skill">PostgreSQL, MySQL, MongoDB</span>
                    <span className="skill">Microsoft Azure, Docker, Kubernatics</span>
                    <span className="skill">SSO, OAuth2/OIDC, JWT, Keycloak</span>
                    <span className="skill">JUnit5, Mockito, Sonar-Qube, JMeter</span>
                    <span className="skill">Maven, Gradle, Log4J, Kibana, Git/Gitlab</span>
                </div>
            </div>

            <br/>
            <div className="card">
                <h2>MY EDUCATION</h2>

                <div className="skills">
                    <span className="skill">M.Sc. (Computer Science & Mathematics), Jamia Millia Islamia, New Delhi — 2000, 73%.</span>
                    <br/>
                    <span className="skill">B.A. (Mathematics), Jamia Millia Islamia, New Delhi — 1997, 77%.</span>
                    <br/>
                    <span className="skill">Certification in Computation, IGNOU, New Delhi — 2000, 79%.</span>
                    <br/>
                </div>
            </div>

            <br/>
            <div className="card">
                <h2>PROFESSIONAL TRAINING</h2>

                <div className="skills">
                    <span className="skill">TOGAF training</span>
                    <br/>
                    <span className="skill">Spring Framework training</span>
                    <br/>
                    <span className="skill">Liferay 6 training</span>
                    <br/>
                     <span className="skill">J2EE/EJB Architecture and Object-Oriented Analysis & Design training</span>
                    <br/>
                </div>
            </div>

            <br/>
            <div className="card">
                <h2>ADDITIONAL INFORMATION</h2>

                <div className="skills">
                    <span className="skill">Domains: Banking & Payments, E-commerce, Government, Airlines, Insurance, Healthcare, Telecom/CTI.</span>
                    <br/>
                    <span className="skill">Delivery: Agile/Scrum, SDLC, architecture/design, development, code review, testing, CI/CD and production support.</span>
                    <br/>
                    <span className="skill">International project exposure: India, UAE, Saudi Arabia, Kuwait, Malaysia and USA</span>
                    <br/>
                     <span className="skill">Hobbeys: Reading, Travelling & Eating </span>
                    <br/>
                </div>
            </div>

        </div>
    )
}


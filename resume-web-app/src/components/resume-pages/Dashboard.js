import React from "react"
import { Link } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="page-container dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-welcome">Welcome back 👋</p>
          <h1>My Dashboard</h1>
          <p className="dashboard-subtitle">
            Here's a quick overview of my skills, projects and experience.
          </p>
        </div>

        <a href="/contact" className="btn btn-primary">
          Contact Me
        </a>
      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">💻</div>
          <div>
            <span>Projects</span>
            <h2>12+</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>
          <div>
            <span>Technologies</span>
            <h2>10+</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div>
            <span>Relevant Experience</span>
            <h2>10+ Years</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <div>
            <span>Completed</span>
            <h2>20+</h2>
          </div>
        </div>

      </div>

      {/* Main Dashboard */}
      <div className="dashboard-grid">

        {/* About */}
        <div className="card dashboard-card">
          <div className="card-title">
            <h2>About Me</h2>
            <span>👨‍💻</span>
          </div>

          <p>
            Senior Java Technical Consultant with 20+ years of software engineering experience, 
            including extensive hands-on delivery with Java, Spring Boot, REST APIs, JPA/Hibernate, 
            microservices, Kafka, Redis, SQL/NoSQL databases, Docker and MS Azure.
          </p>

          <Link to="/about" className="dashboard-link">
            View my profile →
          </Link>
        </div>

        {/* Skills */}
        <div className="card dashboard-card">
          <div className="card-title">
            <h2>Top Skills</h2>
            <span>⚡</span>
          </div>

          <div className="dashboard-skills">
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

        {/* Recent Projects */}
        <div className="card dashboard-card projects-dashboard">
          <div className="card-title">
            <h2>Recent Projects</h2>
            <span>📁</span>
          </div>

          <div className="dashboard-project">

            <div>
              <h3>Qiwa App (Takamol Holding, KSA)</h3>
              <span>Feb, 2024 - Present</span>
              <p>
                Design and develop backend services for establishment and employee subscription journeys, 
                including payment integration through CARD and SADAD.
              </p>
            </div>

            <span className="project-status in-progress">
              In Progress
            </span>

          </div>

          <div className="dashboard-project">

            <div>
              <h3>IndusInd Mobile Banking (Xebia India)</h3>
              <span>Mar, 2022 - Dec, 2023</span>
              <p>
                Contributed from application inception to design and development of customer onboarding journeys 
                integrating Finacle, Keycloak, Couchbase and third-party KYC services.
              </p>
              <p>
                Implemented onboarding and account-opening flows using PAN/Aadhaar validation, OTP and VKYC integrations.
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>

          </div>

          <div className="dashboard-project">

            <div>
              <h3>MAF Carrefour (Xebia Middle East)</h3>
              <span>Sep, 2020 - Feb, 2022</span>
              <p>
                Designed and developed payment-wallet integrations for M-Pesa Kenya and EasyPaisa through production deployment.
              </p>
              <p>
                Developed payment integrations with Checkout.com and CyberSource and contributed to payment orchestration for refunds.
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>
          </div>

          <div className="dashboard-project">

            <div>
              <h3>Emirates Airlines & Smart Dubai & Bobyan Banking (Xebia Middle East)</h3>
              <span>Jan, 2018 - Sep, 2020</span>
              <p>
                Collect the requirement from the client and prepare document after analyzing it.
                Suggest application architecture and creating the Design document.
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>
          </div>

          <div className="dashboard-project">

            <div>
              <h3>CMO Portal & Agent Toolbar(VertexOne Process Solution, USA)</h3>
              <span>Oct, 2014 - Sep, 2017</span>
              <p>
                Analyzed client BRDs, produced technical documents/data-flow designs and delivered backend functionality for CTI/contact-center applications.
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>

          </div>

          <div className="dashboard-project">

            <div>
              <h3>Dorsey & Able-UI (R Systems Ltd., India)</h3>
              <span>Oct, 2010 - Mar, 2014</span>
              <p>
                Led analysis, technical design, development, testing and deployment of Liferay-based payment portals.
                Worked directly with business requirements and client queries to deliver administration and cardholder functionality.
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>

         </div>

        <div className="dashboard-project">

            <div>
              <h3> Core Elixir, Life/Health Insurance(Mastek Ltd. India)</h3>
              <span>Oct, 2007 - Mar, 2010</span>
              <p>
                Analysis the business documents and create technical design, development and deployment of insurance portals.
                Worked directly with business requirements and client queries to design insurance functionality
              </p>
            </div>

            <span className="project-status">
              Completed
            </span>

          </div>


        </div>


        {/* Experience */}
        {/* <div className="card dashboard-card"> */}
        <div className="card dashboard-card projects-dashboard">
          <div className="card-title">
            <h2>EARLIER IT Experience</h2>
            <span>💼</span>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>

            <div>
              <h3>Java Developer</h3>
              <p className="experience-company">
               Saudi Aramco, Dhahran, KSA — Engineer — Petroleum Engineering Model Builder 
              </p>
              <span>2006 - 2007</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>

            <div>
               <h3>Java Developer</h3>
              <p className="experience-company">
                CCG (CASE Consulting Group), Mumbai — Programmer — Vessel Scheduling System for CP Ships, UK.
              </p>
              <span>2005 - 2006</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>

            <div>
               <h3>Java Developer</h3>
              <p className="experience-company">
                ITA Solutions / AGENDA Corporation, Malaysia — Consultant — DHL Asia Pacific Web Customer Service Link.
              </p>
              <span>2003 - 2004</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>

            <div>
               <h3>Java Developer</h3>
              <p className="experience-company">
                Smile Multimedia, New Delhi — Senior Programmer — Sony web application project.
              </p>
              <span>2002 - 2003</span>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-dot"></div>

            <div>
               <h3>Java Developer</h3>
              <p className="experience-company">
                Medical Online, Malaysia — Programmer — Continuing Medical Education portal for Ministry of Malaysia.
              </p>
              <span>2000 - 2002</span>
            </div>
          </div>


        </div>

      </div>

    </div>
  );
}



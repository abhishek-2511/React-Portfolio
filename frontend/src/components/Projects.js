import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import cert1 from "../assets/img/certificate1.png";
import cert2 from "../assets/img/certificate2.png";
import cert3 from "../assets/img/certificate3.png";
import cert4 from "../assets/img/certificate4.png";
import cert5 from "../assets/img/certificate5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const firstTabProjects = [
    {
      title: "Link-up",
      description: "A Social Media App. Tech Stack: Node.js, MongoDB, CSS, Javascript,ejs. Key Features: Google Authentication, create posts, edit and delete posts.",
      imgUrl: projImg1,
      githubRepo: "https://github.com/abhishek-2511/Link-up" 
    },
    {
      title: "Taskify",
      description: "A ToDO App. Tech Stack: Javascript, ejs, express.js, MongoDB. Key Feature: create, delete, organize tasks, due dates, status update, data backup",
      imgUrl: projImg2,
      githubRepo: "https://github.com/abhishek-2511/Taskify-TODO-App"
    },
    {
      title: "Ping Pong Game",
      description: "Tech Stack: Html, Css, JavaScript",
      imgUrl: projImg3,
      githubRepo: "https://github.com/abhishek-2511/Ping-Pong-Game"
    },
    {
      title: "Calculator",
      description: "Tech Stack: Html, Css, JavaScript",
      imgUrl: projImg4,
      githubRepo: "https://github.com/abhishek-2511/Calculator"
    },
    {
      title: "Ipod using React",
      description: "Tech Stack: React",
      imgUrl: projImg5,
      githubRepo: "https://github.com/abhishek-2511/iPod-app"
    },
    {
      title: "Expense Tracker",
      description: "Tech Stack: React, Firebase",
      imgUrl: projImg6,
      githubRepo: "https://github.com/abhishek-2511/Expense-Tracker"
    },
    
  ];

  const secondTabProjects = [
    {
      title: "PhotoHarbour using React",
      description: "Tech Stack: React,Firebase,React Toastify",
      imgUrl: projImg7,
      githubRepo: "https://github.com/abhishek-2511/PhotoHarbour"
    },
    {
      title: "Shopify-App",
      description: "Tech Stack: React,Firebase Database,ContextAPI,React-toastify,React-spinner,React-Router-Dom",
      imgUrl: projImg8,
      githubRepo: "https://github.com/abhishek-2511/ShopIfy-App"
    },
  ]

  const certificates = [
      {
        title: "Introduction to JAVA",
        description: "",
        imgUrl: cert1,
        githubRepo: "https://certificate.codingninjas.com/view/d6f62891b20a0467"
      },
      {
        title: "Data Structures in JAVA",
        description: "",
        imgUrl: cert2,
        githubRepo: "https://certificate.codingninjas.com/view/a6bff968f3f4b9e3"
      },
      {
        title: "Front End | Full Stack Web Development | Professional",
        description: "",
        imgUrl: cert3,
        githubRepo: "https://certificate.codingninjas.com/view/de77b3b7e84972e4"
      },
      {
        title: "Back End | Full Stack Web Development in Node.js",
        description: "",
        imgUrl: cert4,
        githubRepo: "https://certificate.codingninjas.com/view/3d167775402e9327"
      },
      {
        title: "Advance Front-End Web Development with React - Full Stack",
        description: "",
        imgUrl: cert5,
        githubRepo: "https://certificate.codingninjas.com/view/75553c8a60859fef"
      },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below is a compilation of projects I've been involved in, showcasing my diverse skills, experiences, and contributions. Each project represents a unique opportunity for learning, growth, and problem-solving.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          firstTabProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          secondTabProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
import React, { useState, useEffect } from 'react';
import '../Components/Home.css';
import Fade from 'react-reveal/Fade';
import { Card, Button, Table, Pagination } from 'react-bootstrap';

function Explore(props) {
  const [gitData, setGitData] = useState({});
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;
  
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  
  useEffect(() => {
    const headers = {
      Authorization: `token ${token}`
    };

    // Fetching GitHub user data
    fetch('https://api.github.com/users/Abdullahata450', { headers })
      .then(response => response.json())
      .then(data => setGitData(data))
      .catch(err => console.error('Error fetching GitHub user data:', err));

    // Fetching GitHub repositories
    fetch('https://api.github.com/users/Abdullahata450/repos', { headers })
      .then(response => response.json())
      .then(data => setRepos(Array.isArray(data) ? data : []))  // Ensure repos is an array
      .catch(err => {
        console.error('Error fetching GitHub repositories:', err);
        setRepos([]);  // Set repos to an empty array on error
      });
  }, [token]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;

  // Use Array.isArray to check if repos is an array before slicing
  const currentRepos = Array.isArray(repos) ? repos.slice(indexOfFirstRepo, indexOfLastRepo) : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div id="service">
        <div
          className="container"
          style={{ color: props.newmode === "#FAE7A5" ? "white" : "white" }}
        >
          <h1
            id="sub"
            style={{ color: props.newmode === "#FAE7A5" ? "black" : "white" }}
          >
            My Services
          </h1>
          <Fade top>
            <div className="service-list">
              <div className="">
                <h2>Web development</h2>
                <i className="fa-solid fa-laptop-code fa-bounce"></i>
                <p>
                  I have experience in front-end development, specializing in
                  creatMy experience includes designing and implementing
                  responsive and accessible web designs that work seamlessly
                  across different devices and browsers.ing engaging and
                  user-friendly web interfaces. I am proficient in{" "}
                  <span>HTML, CSS, JavaScript And PHP</span>, and have a deep
                  understanding of front-end frameworks such as{" "}
                  <span>React js</span>
                </p>
              </div>

              <div>
                <h2>Data Base</h2>
                <i className="fa-solid fa-database fa-bounce"></i>
                <p>
                  I have extensive experience working with{" "}
                  <span>Oracle Database</span>, one of the leading relational
                  database management systems. I have worked on various Oracle
                  Database versions, including{" "}
                  <span>Oracle 10g and Oracle 11c</span>. I am proficient in
                  writing complex SQL queries to retrieve, manipulate, and
                  analyze data stored in Oracle Database. My experience includes
                  designing and optimizing database schemas, tables, and indexes
                  for efficient data storage and retrieval.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div
        id="portfolio"
        style={{ color: props.newmode === "#FAE7A5" ? "black" : "white" }}
      >
        <div className="container">
          <h1 id="sub">My Work</h1>
          <div className="row">
            <Fade left>
              <div
                className="col-lg-4 col-md-6 col-sm-12 my-3"
                style={{ color: props.newmode === "#FAE7A5" ? "white" : "" }}
              >
                <div className="work">
                  <img src="img/home.png" alt="" />
                  <div className="layer">
                    <h3 style={{ fontSize: "18px" }}>Travel Booking Website</h3>
                    <p style={{ fontSize: "13px" }}>
                      This project is a travel booking website where users can
                      book different hotels in cities across Pakistan. The
                      website allows users to create their own packages to visit
                      different cities in Pakistan. The website is built using
                      PHP, Tailwind CSS, Bootstrap,and a MySQL database.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div
                className="col-lg-4 col-md-6 col-sm-12 my-3"
                style={{ color: props.newmode === "#FAE7A5" ? "white" : "" }}
              >
                <div className="work">
                  <img src="img/contact.png" alt="" />
                  {/* <img src="images/contact.png" alt="" style="margin-top: 10px;"> */}
                  <div className="layer">
                    <h3>Contact Form</h3>
                    <p>
                      Contact form created with attractive UI using HTML 5,
                      Bootstrap and Tailwindcss. The form is fully responsive
                      and compatible with all devices.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div
                className="col-lg-4 col-md-6 col-sm-12 my-3"
                style={{ color: props.newmode === "#FAE7A5" ? "white" : "" }}
              >
                <div className="work">
                  <img src="img/login.png" alt="" />
                  {/* <img src="images/login.png" alt="" style="margin-top: 10px;"> */}
                  <div className="layer">
                    <h3>Login or Sign Up Form</h3>
                    <p>
                      Login or Sign Up form UI Created with HTML 5 Bootstraps
                      and tailwind css
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <h3 id="sub" className="my-4 text-center">
              Using React js
            </h3>

            <Fade left>
              <div
                className="col-lg-5 col-md-4 col-sm-12 my-5 text-center"
                style={{ color: props.newmode === "#FAE7A5" ? "white" : "" }}
              >
                <div className="work my-2 text-center">
                  <img
                    src="img/word.png"
                    alt=""
                    className="my-3"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      display: "block",
                    }}
                  />
                  {/* <img src="images/login.png" alt="" style="margin-top: 10px;"> */}
                  <div className="layer ">
                    <h3>Utility text App</h3>
                    <p>
                      This App is a simple utility for customizing text
                      according to your needs. It takes a text and provides
                      various options to customize it. I used React and Tailwind
                      CSS for making this app.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div
                className="col-lg-5 col-md-4 col-sm-12 my-5 text-center"
                style={{ color: props.newmode === "#FAE7A5" ? "white" : "" }}
              >
                <div className="work my-2 text-center">
                  <img src="img/chat-app.png" alt="" className="my-3" />
                  {/* <img src="images/login.png" alt="" style="margin-top: 10px;"> */}

                  <div className="layer ">
                    <h3 style={{ textDecoration: "underline" }}>A Chat App</h3>
                    <p style={{ textDecoration: "underline" }}>
                      A full-stack MERN chat app with real-time functionality
                      using Socket.IO. Created with: Node.js, Express.js,
                      MongoDB, React, and Socket.IO.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade>
              <div className="col-lg-6 col-md-8 col-sm-10 mx-auto my-5 text-center">
                <h3
                  id="sub"
                  className="my-2 text-center "
                  style={{ fontSize: "40px" }}
                >
                  Working of Chat-app
                </h3>
                <div
                  className="embed-responsive embed-responsive-16by9"
                  style={{ height: "250px" }}
                >
                  <video className="embed-responsive-item" controls>
                    <source src="img/chat-app-working.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </Fade>
          </div>

          {/* <Fade>
            <h3 id="sub" className="my-5 text-center">My GitHub Profile</h3>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Card className="text-center">
                  <div className="row g-2 align-items-center text-center">
                    <div className="col-md-4 align-items-center justify-content-center">
                      <Card.Img
                        variant="top"
                        src={gitData.avatar_url}
                        alt="GitHub Avatar"
                        style={{
                          borderRadius: '5px',
                          maxWidth: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <div className="col-md-8 mt-7">
                      <Card.Body className="text-start d-flex flex-column justify-content-center">
                        <Card.Title>{gitData.name}</Card.Title>
                        <Card.Text>{gitData.bio}</Card.Text>
                        <Card.Text>
                          <strong>Repositories:</strong> {gitData.public_repos} <br />
                          <strong>Followers:</strong> {gitData.followers} <br />
                          <strong>Following:</strong> {gitData.following} <br />
                          <strong>LinkedIn:</strong> <a href={gitData.blog}>LinkedIn</a>
                        </Card.Text>
                        <Button variant="dark" href={gitData.html_url} target="_blank">
                          View GitHub Profile
                        </Button>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Fade> */}
 
           <Fade>
           <h3 id="sub" className="my-5 text-center">My GitHub Profile</h3>
          <div className="card mb-4 mx-auto" style={{ maxWidth: 540 + "px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={gitData.avatar_url}
                  alt="git Avatar"
                  class="img-fluid rounded-start"
                  style={{ objectFit: "cover"  ,height:"100%"}}
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title text-center">My GitHub Profile</h5>
                  <p class="card-text text-center">
                    <strong>Repositories:</strong> {gitData.public_repos} <br />
                    <strong>Followers:</strong> {gitData.followers} <br />
                    <strong>Following:</strong> {gitData.following} <br />
                    <strong>LinkedIn:</strong> <a href={gitData.blog}>LinkedIn</a>
                  </p>
                  <p class="card-text text-center">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="dark"
                      href={gitData.html_url}
                      target="_blank"
                      style={{ padding: "0.25rem 0.5rem", margin: "0.25rem", fontSize: "14px", alignItems: "center" }}
                    >
                      View GitHub Profile
                    </Button>
                  </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Fade>

          <Fade>
            <h4
              id="sub"
              className="my-5 text-center"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              My GitHub Repositories:
            </h4>
            <Table striped bordered hover variant="dark" responsive="md">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Repository Name</th>
                  <th>URL</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                {currentRepos.map((repo) => (
                  <tr key={repo.id}>
                    <td>{repo.id}</td>
                    <td>{repo.name}</td>
                    <td>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repo.html_url}
                      </a>
                    </td>
                    <td>{repo.language}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-center">
              <Pagination>
                {[...Array(Math.ceil(repos.length / reposPerPage)).keys()].map(
                  (number) => (
                    <Pagination.Item
                      key={number + 1}
                      active={number + 1 === currentPage}
                      onClick={() => handlePageChange(number + 1)}
                    >
                      {number + 1}
                    </Pagination.Item>
                  )
                )}
              </Pagination>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Explore;












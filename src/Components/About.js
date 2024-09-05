import React, { useState } from 'react';
import '../Components/About.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function About(props) {
  const [activeTab, setActiveTab] = useState('skills');

  const openTab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <Fade bottom>
      <div id="about" style={{ marginTop: "-2%" }}>
        <div className="container" style={{ color: props.newmode === '#FAE7A5' ? 'black' : 'white' }}>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12" style={{ position: 'relative' }}>
              <Slide left>
                <div className="fixed-image-container">
                  <img src="/img/me3.jpg"  position="fixed" alt="Abdullah's Profile" className='img-fluid' style={{ borderRadius: '20px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)' }} />
                </div>
              </Slide>
            </div>

            <div className="about-col-2 col-lg-8 col-md-6 col-sm-12" id='about2'>
              <h1 id="sub" className='sub2'>About Me</h1>
              <p className='para' style={{ fontSize: 'large', wordSpacing: '5px', lineHeight: '1.7' }}>
                I'm a dedicated and ambitious <span>Computer Science student</span> with a strong passion for technology and innovation. Currently pursuing my degree in <span>Computer Science</span>, I'm committed to expanding my knowledge and skills in this ever-evolving field. My enthusiasm for learning drives me to continuously seek opportunities for growth and development in the world of technology. I am particularly interested in software development, web technologies, and emerging trends like AI and machine learning.
              </p>

              <div className="tab-titles">
                <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => openTab('Education')}>Education</p>
                <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => openTab('Experience')}>Experience</p>
              </div>

              <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                <ul>
                  <li>
                    <span><b>C++</b></span>
                    <p>Designing console-based applications</p>
                  </li>
                  <li>
                    <span><b>Data Structures and Algorithms</b></span>
                    <p>Implementing efficient algorithms and data management</p>
                  </li>
                  <li>
                    <span><b>Object-Oriented Programming (OOP)</b></span>
                    <p>Building modular and reusable code</p>
                  </li>
                  <li>
                    <span><b>Assembly Language Programming</b></span>
                  </li>
                  <li>
                    <span><b>Oracle Database</b></span>
                  </li>
                  <li>
                    <span><b>Web Development</b></span>
                    <p>(HTML, CSS, JavaScript, PHP, React.js)</p>
                  </li>
                  <li>
                    <span><b>Flutter</b></span>
                    <p>Developing cross-platform mobile applications</p>
                  </li>
                  <li>
                    <span><b>MERN Stack</b></span>
                    <p>Full-stack development with MongoDB, Express.js, React.js, and Node.js</p>
                  </li>
                  <li>
                    <span><b>MongoDB Aggregations</b></span>
                    <p>Handling complex queries and data analysis</p>
                  </li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                <ul>
                  <li>
                    <span>Matric</span>
                    <p>Completed with Computer Science in 2019.</p>
                  </li>
                  <li>
                    <span>College</span>
                    <p>Completed Intermediate of Computer Science (ICS) in 2021.</p>
                  </li>
                  <li>
                    <span>University</span>
                    <p>Currently pursuing a Bachelor's degree in Computer Science (2021-2025).</p>
                  </li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="Experience">
                <ul>
                  <li>
                    Participated in University BootCamp Projects. 
                    Made some personal projects like Online, Chat App and E-commerce . 
                  </li>
                  <li>
                    Developing personal projects and contributing to open-source.
                  </li>
                  <li>
                    <a href="https://eritheialabs.com/" target="_blank" rel="noopener noreferrer" style={{ color: props.newmode === '#FAE7A5' ? 'black' : 'white', textDecoration: 'none' }}>
                      <i className="icon ion-ios-briefcase" style={{color: '#66bb6a'}}></i> <u>Internship at Eritheia Labs</u> <span style={{color: '#388e3c'}}>(July - September 2024)</span>
                    </a>
                    <p>Worked as an intern for 2.5 months, where I honed my skills in the MERN stack and contributed to various real-life production projects.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

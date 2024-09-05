import React from 'react';
import '../Components/Home.css';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical';

export default function Home(props) {
  return (
    <>
      <Fade right>
        <div className="img-fluid2 col-lg-4 col-md-6 col-sm-12"></div>
      </Fade>

      <div className="text container" style={{ color: props.newmode === 'dark' ? 'white' : 'black' }}>
        <div className="row">
          <div className="col-12">
            <Fade bottom>
              <p className='newp'>
              <Typical
      steps={[
        'Front-End Developer', // Text to display
        3000, // Time to display the text (in milliseconds)
        '', // Clear text
        1000, // Pause before starting to erase (in milliseconds)
        '', // Text to erase
        2000, // Time to erase the text (in milliseconds)
        'MERN Stack Developer', // New text to display
        3000, // Time to display the new text (in milliseconds)
        '', // Clear text
        1000, // Pause before starting to erase (in milliseconds)
        '', // Text to erase
        2000, // Time to erase the text (in milliseconds)
        'With a Passion for Coding', // New text to display
        3000, // Time to display the new text (in milliseconds)
        '', // Clear text
        1000, // Pause before starting to erase (in milliseconds)
        '', // Text to erase
        2000, // Time to erase the text (in milliseconds)
      ]}
      loop={Infinity} // Infinite loop
      wrapper="p" // HTML element wrapper for the effect
    />
              </p>
            </Fade>
            <h1>Hi, I'm <span>Abdullah Bin Ata</span> From Pakistan</h1>
            <span className="typing-text">
              "Welcome to my portfolio, a captivating showcase of my exceptional skills, expertise, and valuable experiences."
            </span>
          </div>
        </div>
      </div>

      <div className="text container" style={{ marginTop: '90px' }}></div>
    </>
  );
}

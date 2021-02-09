import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function AboutMe() {
  return (
  <div className="about-me-des">
        <div className="image-section">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHafj9oOlGulw/profile-displayphoto-shrink_800_800/0/1591929271141?e=1618444800&v=beta&t=h1fNNSzUPzxkV6bgCxKZSc_X9-bLQWJmxqSjWbiFuLM" alt=""/>
          </div>
  <h1>
    Backend Developer | MERN Stack | Business Analyst
  </h1>
  <div className="about-me-text">
  <p>
    Creative developer with experience in front end development, back end development, data
    analytics, and competent in user experience and user interface design.
    <br/><br/>
    My motivation is to develop applications that break down barriers and solve some real-world problems that people
    face. I have worked with a few top multinational companies and smart service Queensland
    which enabled my exposure to different industries.
    <br/><br/>
    I graduated from Monash University Australia. With a background of computer science, I am an enthusiast of learning new technologies and engaging in meetups. Always tries to look out for more environmentally friendly options around.
    <br/><br/>
    Not to miss I am a fervent cricket supporter and a dog lover.
  </p>
  </div>
  <Footer></Footer>
  </div>
  );
}

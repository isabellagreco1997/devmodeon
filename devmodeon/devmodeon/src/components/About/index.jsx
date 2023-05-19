import React from 'react';
import './styles.css';
import profileImage from './profile.jpg';

const About = () => {
    return (
      <div className="about-container">
        <div className="title-container">
          <h2 className="about-title">About Me</h2>
        </div>
        <div className="about-content">
          <div className="image-container">
            <img className="profile-image" src={profileImage} alt="Profile" />
          </div>
          <div className='text-container'>
          <p>Hey there! I'm Isabella Greco, a millennial Software Engineer rocking it at Vodafone. I'm all about helping fellow tech enthusiasts make their mark in the industry and shape the future of technology.</p>
          {/* <p>As a frontend developer, I get a kick out of crafting sleek interfaces and diving into software development. But it doesn't stop there! I'm on a mission to inspire and empower the next generation, especially women, to thrive in the tech world. You'll often find me championing the #womenintech movement and actively promoting diversity and inclusivity.</p> */}
          {/* <p>But it's not just about the work. I'm a firm believer in work-life balance and well-being at work. Taking care of ourselves is crucial, and I'm all for creating a supportive and inclusive environment that fosters personal growth and happiness. #wellbeingatwork is a topic I'm truly passionate about.</p> */}
          <p>Speaking of passion, I love sharing my insights and experiences at conferences and events. If you're interested in learning about tech careers, frontend development, software development, or just geeking out about the latest trends, let's connect and collaborate!</p>
       <p>Together, let's build a future where technology thrives, diversity reigns, and opportunities are abundant.</p>
        </div>
        </div>
      </div>
    );
  };
  

export default About;

import React, {useState} from 'react';
import './styles.css';
import Image from './profile.png'
import MailchimpForm from '../MailchimpForm';
import { useForm } from 'react-mailchimp-subscribe';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>What if I told you...</h1>
      <h2>There is a <span style={{color: 'orange'}}>proven</span> way to</h2>
      <h2>get into tech as a  <span style={{textDecoration: 'underline'}}>self-taught developer</span>?</h2>

      <img src={Image} />

<div className='wrapper'>
      <h3>Learn EXACTLY How I Can Help</h3>
      <h3>You Get Started in Tech</h3>
      <h3>With <span style={{textDecoration: 'underline'}}>No Degree or Experience</span></h3>
      </div>

      <p>Since you clicked on my link, you see</p>
      <p>the value in what I do. So maybe you</p>
      <p>are ready to JUMP IN and open your mind</p>
      <p>to new possibilities. Believe me, I've researched various methods to break into the tech industry as a self-taught developer, and I can guide you through the best approach.</p>

      <h4 style={{textDecoration: 'underline', fontSize:'35px', margin:'35px 0'}}>WHY?</h4>
      <p>Because You don't need to worry about</p>

      <ul style={{ fontSize:'22px'}}>
        <li>✘ Having a Degree</li>
        <li>✘ Previous Experience</li>
        <li>✘ Expensive Courses</li>
        <li>✘ Lengthy Study Periods</li>
        <li>✘ Not paying for expensive bootcamp</li>
        <li>✘ Not paying for degree</li>
      </ul>

      <p>This is <span style={{fontWeight: 'bold', fontSize:'22px', textDecoration: 'underline'}}>REAL</span> and this is <span style={{fontWeight: 'bold', fontSize:'22px', textDecoration: 'underline'}}>LEGIT</span>. It's also the <span style={{ fontWeight: 'bold'}}>fastest</span> and most <span style={{ fontWeight: 'bold'}}>effective</span> way to start a career in tech as a self-taught developer. You don't want to miss out on this opportunity...</p>

      {/* <p>OH, and whatever you do, DO NOT forget to watch the video on the next page. It contains valuable insights and strategies that I used to become a successful self-taught developer!</p> */}


      <h1 style={{fontSize:'35px'}}>My Free e-book will break everything down and provide you with the tools you need to get started today.</h1>
      <div className="email-form">
      <div className='wrapper-2'>
        <label htmlFor="email">Where should I send your FREE e-book?</label>
        </div>
        <div id="mc_embed_signup">



     <MailchimpForm />
    </div>


        
        {/* <button>Get Free e-book</button> */}
      </div>

      {/* <p>Don't miss my short message on the next page either!</p> */}
      <p>"Every line of code you write is a step towards mastery. Embrace each challenge as an opportunity to learn and grow. Remember, the expert in anything was once a beginner."</p>
    </div>
  );
};

export default LandingPage;

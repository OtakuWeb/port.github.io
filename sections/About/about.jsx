import React from 'react';
import "./about.css";
import AboutImage from "../../assets/about-img.jpg"
import CV from "../../assets/cv.pdf"
import {BsCloudDownloadFill} from "react-icons/bs"
import Card from "../../components/Card"
import data from "./data"
import { FaCcVisa } from 'react-icons/fa';

const about = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
               {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                    <span className="about__card-icon">{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          <h3>Let me be your <h1 className='green'>Developer!</h1></h3>
          <p>
            My name is Andrew Williams form Bayelsa State, a student of the faculty of law Benson Idahosa University Edo State, and a front-end developer who aspires to excel in professionally and morally in my field of expertise. For more information please view my <span className='green'>CV <BsCloudDownloadFill/></span>
          </p>
          <a href={CV} download className="btn primary">Download CV <BsCloudDownloadFill/></a>
        </div>
      </div>
    </section>
  )
}

export default about
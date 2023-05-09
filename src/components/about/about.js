import React from "react";
import './about.css';
import {FaAward} from 'react-icons/fa';
import {CgWorkAlt} from 'react-icons/cg';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';
import ME from "../../assets/anivi.png"

const About = ()=>{
    return(
        <section id="about" className="reveal">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"></img>
                    </div>
                </div>

                <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <CgWorkAlt className="about__icon"/>
                        <h5>Experience</h5>
                        <small>Big Data Intern @Cognizant</small>
                    </article>

                    <article className="about__card">
                        <AiOutlineFundProjectionScreen className="about__icon"/>
                        <h5>Projects</h5>
                        <small>15+ Projects</small>
                    </article>

                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Ceritifications</h5>
                        <small>5+ Certifications</small>
                    </article>      
                </div>
                <p>Hi, I'm Anivinder.Software Developer at Cylogic. I'm a curious person with interests in a wide range of topics from development to finance to space and more. 

                </p>
                <a href="#contact" className="btn btn-primary">Let's talk</a>
            </div>
                
            </div>

            

        </section>
    );
}

export default About;
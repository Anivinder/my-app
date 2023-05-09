import React from "react";
import './experience.css';
import WorkExperience from "./workExperience";
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
    return (
        <section id="experience" className="reveal">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container">
                <div className="work_experience_container">
                    <WorkExperience/>
                </div>
                <div className="experience__container">
                    <div className="experience__frontent">
                        <h3>Languages & Frameworks</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Java</h4>
                                    <small className="text-light">Experienced</small>
                                </div>

                            </article>
                            <article className="experience__details" >
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Springboot</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Javascript</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>React</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>C++</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Python</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>NodeJs & Express</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsFillPatchCheckFill className="experience__details-icon" />
                                <div>
                                    <h4>Flask</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;
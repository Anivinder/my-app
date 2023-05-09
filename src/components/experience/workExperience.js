import React from "react";
import './experience.css';
import barclays from '../../assets/anivi.png';

const WorkExperience= () => {
    return(
        <div>
            <div className="work-experience">
                <img src={barclays}/>
                <div>
                    <h3>Big Data Intern @Cognizant</h3>
                    <p>June 2022 - August 2022</p>
                </div>
            </div>
            <ul className="work-tasks">
                <li>
                    Developed a Node based RAML to Dynamic UI generator to quickly hit and test API endpoints with ease.
                    The application extensively uses multiple recursive search and traversal algorithms to maintain 
                    dynamicity and also supports regex testing for input parameters.
                </li>
                <li>
                    Worked on migration of 10+ Maven based Java repositories to a new gradle based template with a switch from 
                    SpringBoot 1.X to 2.X.
                </li>
            </ul>
        </div>
        
    );
}

export default WorkExperience;
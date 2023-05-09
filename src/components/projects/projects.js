import React from "react";
import './projects.css';
// Project Banners
import MiniSqlInterpreter from '../../assets/anivi.png'


const Projects = ()=>{

    const redirectTo = (link)=>{
        window.open(link, '_blank', 'noopener,noreferrer');
    }

    return(
        <section id="projects" className="reveal">
            <h5>Interesting things I've worked on</h5>
            <h2>My Projects</h2>

            <div className="container projects__container">
                <div className="project" onClick={()=>redirectTo('https://github.com/prabhav-pandya/Chess-AI-MinMax')}>
                    <img src={MiniSqlInterpreter}/>
                    <div>
                        <h3>Chess AI</h3>
                        <p>A minmax based Chess AI built using vanilla javascript. </p>
                    </div>
                </div>
                <div className="project" onClick={()=>redirectTo('https://github.com/prabhav-pandya/MiniSQL-Interpreter')}>
                    <img src={MiniSqlInterpreter}/>
                    <div>
                        <h3>Mini-SQL Interpreter</h3>
                        <p>An SQL interpreter written in C++. Basics of core commands like: SELECT, INSERT, DELETE, CREATE TABLE, DROP, UPDATE, HELP are currently supported.</p>
                    </div>
                </div>
                <div className="project" onClick={()=>redirectTo('https://github.com/prabhav-pandya/Maze-Path-Finder')}>
                    <img src={MiniSqlInterpreter}/>
                    <div>
                        <h3>Maze Path Finder</h3>
                        <p>A C++/SFML based application using multiple path-finding algorithms: A*, Best First Search, Djikstra, & DFS, to solve mazes. Users can either manually enter mazes or have our random maze generating algorithm do it for them. </p>
                    </div>
                </div>
                <div className="project" onClick={()=>redirectTo('https://github.com/prabhav-pandya/Point-Star')}>
                    <img src={MiniSqlInterpreter}/>
                    <div>
                        <h3>Point*</h3>
                        <p> An interpreted turing complete programming language developed using Java. Followed a modular approach to make it easier to add support for new features.</p>
                    </div>
                </div>
            </div>
            <a href="https://github.com/prabhav-pandya" target="_blank" className="btn btn-primary">
                See More
            </a>
        </section>
    );
}

export default Projects;
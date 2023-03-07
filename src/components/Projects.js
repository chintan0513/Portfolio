/* eslint-disable react/jsx-no-target-blank */
import '../styles/projects.css';
import { buttons } from '../projects';
import React, { useState, useEffect } from "react";
import { getProject, filterProject } from '../list';

const Projects = () => {

    const [filteredProject, setFilteredProject] = useState(null);
    useEffect(() => {
        setFilteredProject(getProject());
    }, []);


    const handleProject = (e) => {
        let typoProject = e.target.value;
        typoProject !== "all" ? setFilteredProject(filterProject(typoProject)) : setFilteredProject(getProject());
    }

    return (
        <div id="projects" className='projects'>
            <h1 className="h1 title">Projects</h1>
            <div className="fproject">
                <div className="buttons">
                    {
                        buttons && buttons.map((type, index) => (

                            <button className="filter-btn" key={index} value={type.value} onClick={handleProject}>{type.name}</button>

                        ))
                    }
                </div>
                <div className="card">
                    {
                        filteredProject && filteredProject.map(project => (
                            <div className="fcard" key={project._id}>
                                <a href={project.link} target="_blank" className="cardlink">
                                    <img className="iproject" src={project.image} alt="project" />
                                    <h3>{project.title}</h3>
                                    <span className="span">Category - {project.category}</span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
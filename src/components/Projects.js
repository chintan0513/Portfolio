/* eslint-disable react/jsx-no-target-blank */
import '../styles/projects.css';
import projects, {} from '../projects';

const Projects = () => {

    return ( 
        <div id="projects" className='projects'>
            <h1 className="h1 title">Projects</h1>
            <div className="fproject">
                <div className="buttons">
                    <button className="filter-btn" data-filter id="btn1">All</button>
                    <button className="filter-btn clear-btn" data-filter="HTML" id="btn2">HTML</button>
                    <button className="filter-btn clear-btn" data-filter="CSS" id="btn3">CSS</button>
                    <button className="filter-btn clear-btn" data-filter="JAVASCRIPT" id="btn4">JS</button>
                    <button className="filter-btn clear-btn" data-filter="React.js" id="btn5">React.js</button>
                    <button className="filter-btn clear-btn" data-filter="Contribution" id="btn6">Contribution</button>
                    <button className="filter-btn clear-btn" data-filter="REST-API" id="btn7">REST-API</button>
                    <button className="filter-btn clear-btn" data-filter="CSS" id="btn8">Bootstrap</button>
                </div>
                <div className="card">
                    { projects.map(project => (
                        <div className="fcard" key={project._id}>
                            <a href={project.link} target="_blank" className="cardlink">
                                <img className="iproject" src={project.image} alt="project"/>
                                <h3>{project.title}</h3>
                                <span className="span">Category - {project.category}</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Projects;
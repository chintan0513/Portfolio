import projects from "./projects"; 

export function getProject() {
    const projectList = projects;
    return projectList;
}

export function filterProject(projectType) {
    let filteredProject = getProject().filter(type => type.typo === projectType);
    return filteredProject;
}
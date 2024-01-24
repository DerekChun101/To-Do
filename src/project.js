import { addTask} from "./task";
import { createProjectDom } from "./dom";
import { saveProjects } from "./savedata";

const projectArray = [];
const projectContainer = document.querySelector('.projectContainer');
class Project {
    constructor(name,tasks = []) {
        this.name = name;
        this.tasks = tasks;
       
    } 

    getTasks() {
        return this.tasks;
    }
    
}
const createProject = () => {
    const name = document.getElementById('projectName').value;
    const project = new Project(name);

    projectArray.push(project);
    
   createProjectList(projectArray);
   saveProjects(projectArray);

   console.log(projectArray);
};

const createProjectList = (projects) => {
    projectContainer.innerHTML = '';
    for(let i = 0; i < projects.length; i++) {
        let id = i;
        createProjectDom(projects[i], id);
    }

    
}

const addTaskToProject = (task, id) => {
    projectArray[id].tasks.push(task);
    console.log(projectArray[id]);
}
export {createProject, addTaskToProject, projectArray, createProjectList};
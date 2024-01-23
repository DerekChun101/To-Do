import { addTask} from "./task";
import { createProjectDom } from "./dom";
const projectArray = [];
const projectContainer = document.querySelector('.projectContainer');
class Project {
    constructor(name, id,  tasks = []) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
    } 

    getTasks() {
        
        return this.tasks;
    }
    getId() {
        return this.id
    }
}

const createProject = () => {
    const name = document.getElementById('projectName').value;
    const project = new Project(name);

    projectArray.push(project);
    
   createProjectList(projectArray);
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
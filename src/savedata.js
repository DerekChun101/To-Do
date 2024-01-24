import { tasksArray } from "./task"
import { projectArray } from "./project"

const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const loadProjectsData = () => {
    
    if(localStorage.getItem('projects') === null) {
        return
    } else {
        const data = JSON.parse(localStorage.getItem('projects'));
        data.forEach(e => {
        projectArray.push(e);
    });
    }
    
    
}

const loadTasksData = () => {

    if(localStorage.getItem('tasks') === null) {
        return
    } else {
        const data = JSON.parse(localStorage.getItem('tasks'));
        data.forEach(e => {
        tasksArray.push(e);
    });
    }
}


export {saveProjects,saveTasks, loadProjectsData, loadTasksData};
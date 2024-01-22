 import { createTaskDom } from "./dom";

 
 const tasksArray = [];
 const taskContainer = document.querySelector('.taskContainer');
 class Task {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        // this.prioirty = prioirty
    }
 }

const addTask = () => {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const task = new Task(name, description, dueDate);
    tasksArray.push(task);
    
    createTaskList(tasksArray,'all');

}
const createTaskList = (tasks,type) => {
    
    let typeOfTask = type
    taskContainer.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        let id = i;
        createTaskDom(tasks[i], id, typeOfTask);
    }
}


export {addTask,tasksArray, createTaskList}
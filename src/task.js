 import { createTaskDom } from "./dom";
 const tasksContainer = [];
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
    tasksContainer.push(task);
    
    displayTask(tasksContainer);

}
const displayTask = (tasks) => {
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        createTaskDom(tasks[i])
    }
}

export {addTask}
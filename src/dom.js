const taskContainer = document.querySelector('.taskContainer');
const createTaskDom = (task) => {
    // taskContainer.innerHTML = '';
    let taskCard = document.createElement('div');
    let taskCardname = document.createElement('div');
    taskCardname.innerHTML = task.name;
    taskCard.appendChild(taskCardname);
    taskContainer.appendChild(taskCard);
}


export {createTaskDom}
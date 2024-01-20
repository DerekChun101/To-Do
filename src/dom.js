const taskContainer = document.querySelector('.taskContainer');
let mainHeader = document.querySelector('.mainHeader');

const loadHome = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'Home';
}
const loadToday = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'Today';
}
const loadThisWeek = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'This Week';
}
const createTaskDom = (task) => {
    // taskContainer.innerHTML = '';
    let taskCard = document.createElement('div');
    let taskCardname = document.createElement('div');
    taskCardname.innerHTML = task.name;
    taskCard.appendChild(taskCardname);
    taskContainer.appendChild(taskCard);
}


export {createTaskDom,
loadHome,
loadToday,
loadThisWeek}
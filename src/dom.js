import { format,add } from "date-fns";

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
    let taskCard = document.createElement('div');
    taskCard.className = 'taskCard'
    let taskCardname = document.createElement('div');
    let taskCardDate = document.createElement('div');
    taskCardname.innerHTML = task.name;
    
    taskCardDate.innerHTML = formatTheDate(task.dueDate);
    taskCard.appendChild(taskCardname);
    taskCard.appendChild(taskCardDate);
    taskContainer.appendChild(taskCard);
}

function formatTheDate (date) {
    const [ year, month, day ] = date.substr(0, 10).split('-')
    return format(new Date(
            year,
            (month - 1),
            day,
    ), 'M-dd-yyyy')
}

export {createTaskDom,
loadHome,
loadToday,
loadThisWeek}
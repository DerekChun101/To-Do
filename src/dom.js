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
    let detailsButton = document.createElement('button');
    
    detailsButton.innerHTML = 'Details';
    detailsButton.addEventListener('click', () => {
        createTaskModal(task.name, task.description, task.dueDate);
      
    })
    
    taskCardname.innerHTML = task.name;
    taskCardDate.innerHTML = formatTheDate(task.dueDate);
1  
    taskCard.appendChild(taskCardname);
    taskCard.appendChild(detailsButton);
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

function createTaskModal(name, description, date) {
    const taskModal = document.createElement('dialog');
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
 
    taskModal.className = 'taskModal';

    let taskName = document.createElement('div');
    taskName.innerHTML = `Name:  ${name}`;

    let taskDescription = document.createElement('div');
    taskDescription.innerHTML = `Description:  ${description}`;

    let taskDate = document.createElement('div');
    taskDate.innerHTML = `Due date:  ${formatTheDate(date)}`;

    
    taskModal.appendChild(taskName);
    taskModal.appendChild(taskDescription);
    taskModal.appendChild(taskDate);

    taskModal.appendChild(closeBtn);
    taskContainer.appendChild(taskModal);

    closeBtn.addEventListener('click', () => {
        taskModal.close();
        taskModal.remove();
    })
    taskModal.showModal();



}

export {createTaskDom,
loadHome,
loadToday,
loadThisWeek}
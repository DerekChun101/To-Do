import { format,add } from "date-fns";
import { tasksArray, createTaskList } from "./task";
const taskContainer = document.querySelector('.taskContainer');
let mainHeader = document.querySelector('.mainHeader');

let whichTab = '';
let date = new Date();


const loadHome = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'Home';
    whichTab = 'home'
    console.log();
    createTaskList(tasksArray);
}
const loadToday = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'Today';
    whichTab = 'today';
    createTaskList(tasksArray);
}
const loadThisWeek = () => {
    mainHeader.innerHTML = '';
    mainHeader.innerHTML = 'This Week';
}
const createTaskDom = (task, id ,type) => {
    console.log(type);
    let taskCard = document.createElement('div');
    taskCard.className = 'taskCard'
    let leftSection = document.createElement('div');
    leftSection.className ='left';
    let rightSection = document.createElement('div');
    rightSection.className ='right';
    let taskCardname = document.createElement('div');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', () => {
        
        if(taskCard.classList.contains('done')) {
            taskCard.classList.remove('done');
        } else {
            taskCard.classList.add("done");
        }
    })
    
    
    let taskCardDate = document.createElement('div');
    taskCardDate.className = 'taskCardDate';
    let detailsButton = document.createElement('button');
    let removeButton = document.createElement('button');

    removeButton.innerHTML = 'X';
    removeButton.addEventListener('click', () => {
        
        taskContainer.removeChild(taskCard);
        tasksArray.splice(id, 1);
        
    })
    
    detailsButton.innerHTML = 'Details';
    detailsButton.addEventListener('click', () => {
        createTaskModal(task.name, task.description, task.dueDate);
      
    })
    
    taskCardname.innerHTML = task.name;
    taskCardDate.innerHTML = formatTheDate(task.dueDate);
1   
    leftSection.appendChild(checkBox);
    leftSection.appendChild(taskCardname);
    
    
    rightSection.appendChild(detailsButton);
    rightSection.appendChild(taskCardDate);
    rightSection.appendChild(removeButton);
    taskCard.appendChild(leftSection);
    taskCard.appendChild(rightSection);

    displayTask(taskCard);
}

function displayTask (taskCard) {
    

    if(whichTab === 'today') {
        if(taskCard.childNodes[1].childNodes[1].innerHTML == formatTheDate(date.toISOString().split('T')[0])) {
            taskContainer.appendChild(taskCard);
        };
    } else if(whichTab === 'home') {
        taskContainer.appendChild(taskCard);
    }
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
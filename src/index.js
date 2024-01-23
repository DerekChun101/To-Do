import './style.css';
import { addTask } from './task'
import { createProject } from './project';
import { loadHome,loadThisWeek,loadToday } from './dom';

loadHome();

const dialog = document.querySelector('.addTaskModal');
const dialog2 = document.querySelector('.addProjectModal');
const open = document.querySelector('.addTaskBtn');
const close = document.querySelector('.closeBtn');

const openProject = document.querySelector('.addProjectBtn');
const closeProject = document.querySelector('.projectClose');

const homeTab = document.querySelector('#home');
const todayTab = document.querySelector('#today');
const thisWeekTab = document.querySelector('#thisWeek');

homeTab.addEventListener('click', () => {
    loadHome();
})
todayTab.addEventListener('click', () => {
    loadToday();
})
thisWeekTab.addEventListener('click', () => {
    loadThisWeek();
})

const date = document.querySelector('#dueDate');
date.min = new Date().toISOString().split("T")[0]; //Prevents user from selecting past date

open.addEventListener('click', ()=> {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

openProject.addEventListener('click', ()=> {
    dialog2.showModal();
})

closeProject.addEventListener('click', ()=> {
    dialog2.close();
})




const callAddTask = (e) => { //Don't know why this is nesscary but it is!
    addTask();
    e.preventDefault();
    dialog.close();
}
const callAddProject = (e) => {
    createProject();
    e.preventDefault();
    dialog2.close();
}

dialog.addEventListener('submit', callAddTask);
dialog2.addEventListener('submit', callAddProject);
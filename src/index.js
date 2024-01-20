import './style.css';
import { addTask } from './task'
import { loadHome,loadThisWeek,loadToday } from './dom';

loadHome();

const dialog = document.querySelector('.addTaskModal');
const open = document.querySelector('.addTaskBtn');
const close = document.querySelector('.closeBtn');

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



const callAddTask = (e) => { //Don't know why this is nesscary but it is!
    addTask();
    e.preventDefault();
    dialog.close();
}

addEventListener('submit', callAddTask);
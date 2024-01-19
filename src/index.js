import './style.css';
// import openDialog from './addDom';


// const openDialog = () => {

//     const dialog = document.querySelector('dialog');
//     const open = document.querySelector('.open');
//     const close = document.querySelector('.close');

//     open.addEventListener('click', ()=> {
//         dialog.showModal();
//     })

// }



const dialog = document.querySelector('.addTaskModal');
const open = document.querySelector('.addTaskBtn');
const close = document.querySelector('.closeBtn');

open.addEventListener('click', ()=> {
    dialog.showModal();
})

close.addEventListener('click', () => {
    dialog.close();
})

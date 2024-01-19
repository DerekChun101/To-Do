
const openDialog = () => {

    const dialog = document.querySelector('.addTaskModal');
    const open = document.querySelector('.addTaskBtn');
    const close = document.querySelector('.closeBtn');

    open.addEventListener('click', ()=> {
        dialog.showModal();
    })

}

export default openDialog;
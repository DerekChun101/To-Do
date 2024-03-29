import { createTaskDom, whichTab, currentId } from "./dom";
import { addTaskToProject, projectArray } from "./project";
import { saveTasks } from "./savedata";

const tasksArray = [];
const taskContainer = document.querySelector(".taskContainer");
class Task {
  constructor(name, description, dueDate) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    // this.prioirty = prioirty
  }
}

const addTask = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;

  const task = new Task(name, description, dueDate);

  if (whichTab === "project") {
    let id = currentId;
    addTaskToProject(task, id);
    createTaskList(projectArray[currentId].tasks);
    return;
  }
  tasksArray.push(task);
  saveTasks(tasksArray);
  console.log(localStorage.getItem("tasks"));
  createTaskList(tasksArray);
};
const createTaskList = (tasks) => {
  taskContainer.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let id = i;
    createTaskDom(tasks[i], id);
  }
};

export { addTask, tasksArray, createTaskList };

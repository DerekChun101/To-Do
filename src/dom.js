import { format, add } from "date-fns";
import { tasksArray, createTaskList } from "./task";
import { createProjectList, projectArray } from "./project";
import { saveProjects, saveTasks } from "./savedata";
const taskContainer = document.querySelector(".taskContainer");
const projectContainer = document.querySelector(".projectContainer");
let mainHeader = document.querySelector(".mainHeader");

let whichTab = "";
let date = new Date();
let currentId = 0;

const loadHome = () => {
  mainHeader.innerHTML = "";
  mainHeader.innerHTML = "Home";
  whichTab = "home";
  console.log();
  createTaskList(tasksArray);
  createProjectList(projectArray);
};
const loadToday = () => {
  mainHeader.innerHTML = "";
  mainHeader.innerHTML = "Today";
  whichTab = "today";
  createTaskList(tasksArray);
};
const loadThisWeek = () => {
  mainHeader.innerHTML = "";
  mainHeader.innerHTML = "This Week";
  whichTab = "week";
  createTaskList(tasksArray);
};

const loadProject = (name) => {
  mainHeader.innerHTML = "";
  mainHeader.innerHTML = name;
  whichTab = "project";
  createTaskList(projectArray[currentId].tasks);
};
const createTaskDom = (task, id) => {
  let taskCard = document.createElement("div");
  taskCard.className = "taskCard";
  let leftSection = document.createElement("div");
  leftSection.className = "left";
  let rightSection = document.createElement("div");
  rightSection.className = "right";
  let taskCardname = document.createElement("div");

  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("change", () => {
    if (taskCard.classList.contains("done")) {
      taskCard.classList.remove("done");
    } else {
      taskCard.classList.add("done");
    }
  });

  let taskCardDate = document.createElement("div");
  taskCardDate.className = "taskCardDate";
  let detailsButton = document.createElement("button");
  let removeButton = document.createElement("button");

  removeButton.innerHTML = "X";
  removeButton.addEventListener("click", () => {
    taskContainer.removeChild(taskCard);
    tasksArray.splice(id, 1);
    saveTasks(tasksArray);
  });

  detailsButton.innerHTML = "Details";
  detailsButton.addEventListener("click", () => {
    createTaskModal(task.name, task.description, task.dueDate);
  });

  taskCardname.innerHTML = task.name;
  taskCardDate.innerHTML = formatTheDate(task.dueDate);
  1;
  leftSection.appendChild(checkBox);
  leftSection.appendChild(taskCardname);

  rightSection.appendChild(detailsButton);
  rightSection.appendChild(taskCardDate);
  rightSection.appendChild(removeButton);
  taskCard.appendChild(leftSection);
  taskCard.appendChild(rightSection);

  displayTask(taskCard);
};

function displayTask(taskCard) {
  const thisWeek = add(new Date(), {
    days: 7,
  });
  const newDate = new Date(taskCard.childNodes[1].childNodes[1].innerHTML);
  if (whichTab === "today") {
    if (
      taskCard.childNodes[1].childNodes[1].innerHTML ==
      formatTheDate(date.toISOString().split("T")[0])
    ) {
      taskContainer.appendChild(taskCard);
    }
  } else if (whichTab === "home") {
    taskContainer.appendChild(taskCard);
  } else if (whichTab === "week") {
    if (newDate < thisWeek) {
      taskContainer.appendChild(taskCard);
    }
  } else if (whichTab === "project") {
    taskContainer.appendChild(taskCard);
  }
}

function formatTheDate(date) {
  const [year, month, day] = date.substr(0, 10).split("-");
  return format(new Date(year, month - 1, day), "M-dd-yyyy");
}

function createTaskModal(name, description, date) {
  const taskModal = document.createElement("dialog");
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "X";

  taskModal.className = "taskModal";

  let taskName = document.createElement("div");
  taskName.innerHTML = `Name:  ${name}`;

  let taskDescription = document.createElement("div");
  taskDescription.innerHTML = `Description:  ${description}`;

  let taskDate = document.createElement("div");
  taskDate.innerHTML = `Due date:  ${formatTheDate(date)}`;

  taskModal.appendChild(taskName);
  taskModal.appendChild(taskDescription);
  taskModal.appendChild(taskDate);

  taskModal.appendChild(closeBtn);
  taskContainer.appendChild(taskModal);

  closeBtn.addEventListener("click", () => {
    taskModal.close();
    taskModal.remove();
  });
  taskModal.showModal();
}

const createProjectDom = (project, id) => {
  let projectRow = document.createElement("div");
  projectRow.className = "projectRow";
  let projectCard = document.createElement("div");
  projectCard.className = "projectCard";
  let projectName = document.createElement("div");
  projectName.innerHTML = project.name;

  let removeProject = document.createElement("div");
  removeProject.innerHTML = "X";

  projectCard.appendChild(projectName);

  projectRow.appendChild(projectCard);
  projectRow.appendChild(removeProject);
  projectContainer.appendChild(projectRow);

  projectCard.addEventListener("click", () => {
    currentId = id;
    console.log(currentId);
    loadProject(projectName.innerHTML);
  });
  removeProject.addEventListener("click", () => {
    projectContainer.removeChild(projectRow);
    projectArray.splice(id, 1);
    createProjectList(projectArray);
    saveProjects(projectArray);
    loadHome();
  });
};

export {
  createTaskDom,
  createProjectDom,
  loadHome,
  loadToday,
  loadThisWeek,
  loadProject,
  whichTab,
  currentId,
};

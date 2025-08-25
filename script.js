const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const taskTime = taskDateTime.value;

  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskContent = document.createElement("div");
  taskContent.className = "task-content";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  const dateSpan = document.createElement("div");
  dateSpan.className = "task-date";
  if (taskTime) {
    const formatted = new Date(taskTime).toLocaleString();
    dateSpan.textContent = `📅 ${formatted}`;
  }

  taskContent.appendChild(span);
  taskContent.appendChild(dateSpan);

  const actions = document.createElement("div");
  actions.className = "task-actions";

  // Complete Button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask;
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(actions);
  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}

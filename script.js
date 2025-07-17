 function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.onclick = () => taskList.removeChild(li);

  actionsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actionsDiv);
  taskList.appendChild(li);

  input.value = "";
}
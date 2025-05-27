const modal = document.getElementById("taskModal");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveTask");

openBtn.onclick = () => {
  modal.style.display = "block";
  overlay.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};

overlay.onclick = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
};
saveBtn.onclick = () => {
  const task = document.getElementById("taskInput").value;
  const date = document.getElementById("dueDate").value;
  const time = document.getElementById("dueTime").value;
  const importance = document.getElementById("importance").value;
  const reminder = document.getElementById("reminder").value;

  if (!task || !date || !time || !importance || !reminder) {
    alert("Please fill all fields");
    return;
  }

  const dueDateTime = new Date(`${date}T${time}`);
  const now = new Date();
  const taskElement = document.createElement("div");
  taskElement.className = "task";
  taskElement.innerHTML = `
    <strong>${task}</strong><br>
   <strong>Priority:</strong> ${importance} <br>
   <strong>Date:</strong> ${date}<br>
    <strong>Time:</strong> ${time}<br>
    <strong>Reminder:</strong> ${reminder}
    <br>
    <button class="complete-task"> Complete</button>
    <button class="delete-task"> Delete</button>
  `;

  taskElement.querySelector(".complete-task").onclick = () => {
    document.getElementById("completedList").appendChild(taskElement);
    taskElement.querySelector(".complete-task").remove();
  };

  taskElement.querySelector(".delete-task").onclick = () => {
    taskElement.remove();
  };

  if (dueDateTime < now) {
    document.getElementById("overdueList").appendChild(taskElement);
  } else {
    document.getElementById("todoList").appendChild(taskElement);
  }

  modal.style.display = "none";
  overlay.style.display = "none";
  document.querySelectorAll("input, select").forEach(i => i.value = "");
};
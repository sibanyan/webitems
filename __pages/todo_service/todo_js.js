document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const filterButtons = document.querySelectorAll(".filter button");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks(filter = "all") {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            if (filter === "active" && task.completed) return;
            if (filter === "completed" && !task.completed) return;

            const li = document.createElement("li");
            li.classList.toggle("completed", task.completed);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => {
                task.completed = !task.completed;
                saveTasks();
                renderTasks(filter);
            });

            const text = document.createElement("span");
            text.textContent = task.text;
            text.contentEditable = true;
            text.addEventListener("blur", () => {
                task.text = text.textContent.trim();
                saveTasks();
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "削除";
            deleteBtn.addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks(filter);
            });

            li.appendChild(checkbox);
            li.appendChild(text);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            saveTasks();
            taskInput.value = "";
            renderTasks();
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            renderTasks(button.dataset.filter);
        });
    });

    renderTasks();
});

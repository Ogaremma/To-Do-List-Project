const form = document.getElementById('todo-form');
const myTodoList = document.getElementById('task-list');
const todoInput = document.querySelector('#daily-task');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        // Create the task container div
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item flex items-center bg-white rounded shadow p-3 mb-2';

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-3 accent-green-500';

        // Task text
        const li = document.createElement('li');
        li.className = 'flex-1 text-blue-700 font-semibold';
        li.textContent = newTodo;

        // Edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn bg-transparent border-0 cursor-pointer mr-2';
        editBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500 hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182l-9.193 9.193a2.25 2.25 0 01-1.012.57l-3.193.798a.75.75 0 01-.91-.91l.798-3.193a2.25 2.25 0 01.57-1.012l9.193-9.193z" />
            </svg>
        `;

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn bg-transparent border-0 cursor-pointer';
        deleteBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-gray-500 hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h10" />
            </svg>
        `;

        // Append elements
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(li);
        taskDiv.appendChild(editBtn);
        taskDiv.appendChild(deleteBtn);
        myTodoList.appendChild(taskDiv);

        todoInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Event delegation for edit and delete
myTodoList.addEventListener('click', function (e) {
    // Find the button that was clicked
    const button = e.target.closest('button');
    if (!button) return;

    // Find the parent task div
    const taskDiv = button.closest('.task-item');
    if (!taskDiv) return;

    // Delete
    if (button.classList.contains('delete-btn')) {
        taskDiv.remove();
    }

    // Edit
    if (button.classList.contains('edit-btn')) {
        const li = taskDiv.querySelector('li');
        const currentText = li.textContent;
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            li.textContent = newText.trim();
        }
    }
});
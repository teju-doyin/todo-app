let addTaskButton = document.getElementById('addTask')
let taskInputModal = document.getElementById('modal')
let closeModal = document.getElementById('close-modal')
let deleteTask = document.getElementById('delete')
let editTask = document.getElementById('edit')
let submitTask = document.getElementById('submit-task')
let modalName = document.getElementById('modal-name')
let taskList = document.getElementById('taskList')
let todoForm = document.getElementById('todoForm')
let taskTitleInput = document.getElementById('title')
let greeting = document.getElementById('greeting')
let taskToEdit = null
let mode = 'create'

// greeting()
addTaskButton.addEventListener('click', ()=> {
    mode = 'create'
    taskToEdit = null
    modalName.textContent = 'Create task'
    submitTask.textContent = 'Save'
    todoForm.reset()
    taskInputModal.style.display = 'block'
})
window.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('UserName');
    const greeting = document.getElementById('greeting');
    
    if (userName) {
        greeting.textContent = `Welcome, ${userName}!`; 
    } else {
        // redirect back to login page
        window.location.href = 'index.html';
    }
});

//
taskList.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('edit-task')){
        mode = 'edit'
        taskToEdit = e.target.closest('.task-item')
        const currentTitle = taskToEdit.querySelector('.task-title').textContent
        taskTitleInput.value= currentTitle
        modalName.textContent = 'Edit task'
        submitTask.textContent = 'Edit'
        taskInputModal.style.display = 'block'
    }
})

//to delete the task
taskList.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('delete-task')){
        const taskToRemove = e.target.closest('.task-item')
        taskToRemove.remove()
        taskInputModal.style.display = 'none'

    }
})

//edit the task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const updatedTitle = taskTitleInput.value.trim();

    if (updatedTitle === "") {
        alert("Task title cannot be empty.");
        return;
    }

    if (mode === "create") {
        // Create a new task
        let taskItem = document.createElement('li');
        let taskItemContainer = document.createElement('div');
        taskItemContainer.classList.add('task-item');

        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task-completed';

        let taskTitle = document.createElement('p');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = updatedTitle;

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskTitle);

        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        let editButton = document.createElement('button');
        editButton.classList.add('edit-task');
        editButton.id = 'edit';
        editButton.textContent = 'Edit';

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-task');
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Delete';

        buttonsDiv.appendChild(editButton);
        buttonsDiv.appendChild(deleteButton);

        taskItemContainer.appendChild(taskDiv);
        taskItemContainer.appendChild(buttonsDiv);

        taskItem.appendChild(taskItemContainer);

        taskList.appendChild(taskItem);
    } else if (mode === "edit") {
        // Update an existing task
        taskToEdit.querySelector('.task-title').textContent = updatedTitle;
    }

    // Reset form and close modal
    todoForm.reset();
    taskInputModal.style.display = "none";
});
submitTask.addEventListener('click', (e) => {
    e.preventDefault()
 
    let taskInput = document.getElementById('title')
    let task = taskInput.value.trim() 

    if (task === '') {
        alert('Task title cannot be empty.')
        return
    }

    let taskList = document.getElementById('taskList')

    let taskItem = document.createElement('li')

    let taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    let taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = 'task-completed'

    let taskTitle = document.createElement('p')
    taskTitle.classList.add('task-title')
    taskTitle.textContent = task

    taskDiv.appendChild(checkbox)
    taskDiv.appendChild(taskTitle)

    let buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('buttons')

    let editButton = document.createElement('button')
    editButton.classList.add('edit-task')
    editButton.id = 'edit'
    editButton.textContent = 'Edit'

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-task')
    deleteButton.id = 'delete'
    deleteButton.textContent = 'Delete'

    buttonsDiv.appendChild(editButton)
    buttonsDiv.appendChild(deleteButton)

    taskItemContainer.appendChild(taskDiv)
    taskItemContainer.appendChild(buttonsDiv)

    taskItem.appendChild(taskItemContainer)

    taskList.appendChild(taskItem)

    taskInput.value = ''
    taskInputModal.style.display = 'none'
    // let taskStatus = undone
})
// clean

closeModal.addEventListener('click', ()=> {
    taskInputModal.style.display = 'none'
})
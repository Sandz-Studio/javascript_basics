let todoTasks = ["Walk Chilli", "Grocery List", "Make Dinner"];
let todoTasksStatus = [false, true, true];
let todoTasksIsImportant = [false, true, true];
let todoTaskDate = ["31/01/2023", "31/01/2023", "31/01/2023"];
const todoList = document.getElementById("todo-list");

updateTodoList();

function addTask() {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
    }
    const newDate = document.getElementById("new-task-date");
    if (newDate.value) {
        // Format the date to "dd/mm/yyyy"
        const date = new Date(newDate.value);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        todoTaskDate.push(formattedDate);
        newDate.value = "";
    }
    updateTodoList();
}

function updateTodoList() {
    todoList.innerText = '';
    // .entries() to the end of the array we are iterating over the index of each item in the array as well as the item itself
    // index to check the status of the item in the todoTasksStatus array. If the item is done (represented by a value of true ), then we add the class complete to the newTodoTaskTextElement element.
    for (const [index, task] of todoTasks.entries()) {
      const newTodoTaskElement = createNewTodoItemElement(task, todoTaskDate[index], index);
      todoList.appendChild(newTodoTaskElement);
    }
  }

function moveTaskUp(index) {
    if (index > 0) {
        // Swap task and its properties with the one above it
        [todoTasks[index], todoTasks[index - 1]] = [todoTasks[index - 1], todoTasks[index]];
        [todoTasksStatus[index], todoTasksStatus[index - 1]] = [todoTasksStatus[index - 1], todoTasksStatus[index]];
        [todoTasksIsImportant[index], todoTasksIsImportant[index - 1]] = [todoTasksIsImportant[index - 1], todoTasksIsImportant[index]];
        [todoTaskDate[index], todoTaskDate[index - 1]] = [todoTaskDate[index - 1], todoTaskDate[index]];
        updateTodoList();
    }
}

function moveTaskDown(index) {
    if (index < todoTasks.length - 1) {
        // Swap task and its properties with the one below it
        [todoTasks[index], todoTasks[index + 1]] = [todoTasks[index + 1], todoTasks[index]];
        [todoTasksStatus[index], todoTasksStatus[index + 1]] = [todoTasksStatus[index + 1], todoTasksStatus[index]];
        [todoTasksIsImportant[index], todoTasksIsImportant[index + 1]] = [todoTasksIsImportant[index + 1], todoTasksIsImportant[index]];
        [todoTaskDate[index], todoTaskDate[index + 1]] = [todoTaskDate[index + 1], todoTaskDate[index]];
        updateTodoList();
    }
}

function createNewTodoItemElement(task, date, index) {
    const newTodoTaskTextElement = document.createElement('p');
    newTodoTaskTextElement.innerText = task;

    const newTodoDateTextElement = document.createElement('p');
    newTodoDateTextElement.innerText = date;
    

    if (todoTasksStatus[index] === true) {
        newTodoTaskTextElement.classList.add('complete');
        newTodoDateTextElement.classList.add(date)
    }

    // Make Important task red!
    if (todoTasksIsImportant[index] === true) {
        newTodoTaskTextElement.classList.add('important');
    }

    const newTodoTaskElement = document.createElement('li');
    newTodoTaskElement.appendChild(newTodoTaskTextElement);
    newTodoTaskElement.appendChild(newTodoDateTextElement);

    // Arrow button for moving task UP
    const upButtonElement = document.createElement('button');
    upButtonElement.innerText = '↑';
    upButtonElement.addEventListener('click', function () {
        moveTaskUp(index);
    });
    newTodoTaskElement.appendChild(upButtonElement);

    // Arrow button for moving task DOWN
    const downButtonElement = document.createElement('button');
    downButtonElement.innerText = '↓';
    downButtonElement.addEventListener('click', function () {
        moveTaskDown(index);
    });
    newTodoTaskElement.appendChild(downButtonElement);

    // change button to query complete or incomplete
    const completeButtonElement = document.createElement('input');
    completeButtonElement.type = 'button';
    completeButtonElement.value = todoTasksStatus[index] ? 'Incomplete' : 'Complete';
    newTodoTaskElement.appendChild(completeButtonElement);

    // completeButtonElement.onclick = function () {
    //     toggleComplete(index);
    // };

    // Replace above - Change the onclick method to an event listner function
    completeButtonElement.addEventListener('click', function () {
        toggleComplete(index);
        completeButtonElement.value = todoTasksStatus[index] ? 'Incomplete' : 'Complete';
    });

    // adding button to mark as important
    const importantButtonElement = document.createElement('input');
    importantButtonElement.type = 'button';
    importantButtonElement.value = todoTasksIsImportant[index] ? 'Important' : 'Unimportant';
    newTodoTaskElement.appendChild(importantButtonElement);

    // adding event listner to button
    importantButtonElement.addEventListener('click', function () {
        markAsImportant(index);
        importantButtonElement.value = todoTaskIsImportant[index] ? 'Important' : 'Unimportant';
    });

    return todoList.appendChild(newTodoTaskElement);
}


function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    updateTodoList();
}



function markAsImportant(index) {
    if (todoTasksIsImportant[index] == false) {
        todoTasksIsImportant[index] = true;
    } else {
        todoTasksIsImportant[index] = false;
    }
    updateTodoList();
}



//     // tripple equals meant strict equility eg:
//     if (todoTasksStatus[index] === true) {
//         newTodoTaskTextElement.classList.add("complete");

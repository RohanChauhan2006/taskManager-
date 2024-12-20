function addTask() {
    // Get the input elements for task, count, and time
    const taskInput = document.getElementById('taskInput');
    const taskCountInput = document.getElementById('taskCount');
    const taskTime = document.getElementById('taskTime');

    // Trim whitespace from the task input value
    const taskValue = taskInput.value.trim();
    // Get the time value from the time input
    const timeValue = taskTime.value;
    // Parse the task count input as an integer, defaulting to 1 if invalid
    const taskCount = parseInt(taskCountInput.value, 10) || 1;

    // Check if the task input is not empty
    if (taskValue) {
        // Get the task list element where tasks will be displayed
        const taskList = document.getElementById('taskList');

        // Loop to add the task the specified number of times
        for (let i = 0; i < taskCount; i++) {
            // Create a new list item for the task
            const li = document.createElement('li');
            // Set the text content of the list item to the task value and time (if provided)
            li.textContent = `${taskValue} ${timeValue ? `at ${timeValue}` : ''}`;

            // Create a delete button for the task
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
            // Set the onclick event to remove the task from the list when clicked
            deleteButton.onclick = function() {
                taskList.removeChild(li);
            };

            // Append the delete button to the list item
            li.appendChild(deleteButton);
            // Append the list item to the task list
            taskList.appendChild(li);
        }

        // Clear the input fields after adding the task
        taskInput.value = ''; // Clear input field
        taskCountInput.value = 1; // Reset count input to 1
        taskTime.value = ''; // Clear time input
    } else {
        // Alert the user if no task was entered
        alert('Please enter a task!');
    }
}


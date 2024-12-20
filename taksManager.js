function addTask() {
 
    const taskInput = document.getElementById('taskInput');
    const taskCountInput = document.getElementById('taskCount');
    const taskTime = document.getElementById('taskTime');

   
    const taskValue = taskInput.value.trim();
   
    const timeValue = taskTime.value;
   
    const taskCount = parseInt(taskCountInput.value, 10) || 1;

   
    if (taskValue) {
      
        const taskList = document.getElementById('taskList');

      
        for (let i = 0; i < taskCount; i++) {
           
            const li = document.createElement('li');
            
            li.textContent = `${taskValue} ${timeValue ? `at ${timeValue}` : ''}`;

          
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Remove';
           
            deleteButton.onclick = function() {
                taskList.removeChild(li);
            };

           
            li.appendChild(deleteButton);
            
            taskList.appendChild(li);
        }

       
        taskInput.value = ''; 
        taskCountInput.value = 1;
        taskTime.value = ''; 
    } else {
     
        alert('Please enter a task!');
    }
}


function add_task() {
    const task = document.getElementById("hiddenTasks").lastElementChild;   // Get next empty task
    const list = document.getElementById("visibleTasks");                   // Get visible list
    
    list.insertBefore(task, list.children[0]);                  // Insert empty task at top

    toggle_add_button();
}

function update_status(elemID) {
    var buttonID = "checkB" + elemID;       // Button ID
    var symbolID = "checkV" + elemID;       // Symbol ID

    const button = document.getElementById(buttonID);   // Button element
    const symbol = document.getElementById(symbolID);   // Symbol element
  
    if (button.checked)
        symbol.innerHTML = "done_outline";  // Switch to thick checkmark
    else
        symbol.innerHTML = "done";          // Switch to thin checkmark
}

function delete_task(elemIDNum) {
    var taskID = "task" + elemIDNum;        // Task <li> ID
    var buttonID = "checkB" + elemIDNum;    // Button ID
    var valueID = "taskV" + elemIDNum;      // Task value ID

    const task = document.getElementById(taskID);           // Task <li> element
    const list = document.getElementById("hiddenTasks");    // Get hidden list
    list.insertBefore(task, list.children[0]);      // Move to hidden list

    document.getElementById(buttonID).checked = false;      // Uncheck box
    update_status(elemIDNum);                               // Reset symbol
    document.getElementById(valueID).value = "";            // Reset text value

    toggle_add_button();        // Show add button
}

function toggle_add_button() {
    const task = document.getElementById("hiddenTasks").lastElementChild;   // Read next task
    
    if (!task)      // If list is empty, i.e. task is NULL
        document.getElementById("addButton").style.display = "none";    // Hide button
    else
        document.getElementById("addButton").style.display = "block";    // SHow button
}
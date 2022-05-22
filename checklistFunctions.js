/* 
ID Categories:
    task_ = <li> task number
    checkB_ = <input> checkbox, <label> checkbox
    checkV_ = <span> checkbox symbol value
    taskV_ = <input> task text
*/
var isEmpty = true;
var isComplete = false;


function add_task() {
    const task = document.getElementById("hiddenTasks").lastElementChild;   // Get next empty task
    const list = document.getElementById("visibleTasks");                   // Get visible list
    
    list.insertBefore(task, list.children[0]);                  // Insert empty task at top

    toggle_add_button();
}


function update_status(elemID) {
    const button = document.getElementById("checkB" + elemID);   // Button element
    const symbol = document.getElementById("checkV" + elemID);   // Symbol element
    const task = document.getElementById("taskV" + elemID);      // Task element

    if (button.checked)
    {
        symbol.innerHTML = "done_outline";  // Switch to thick checkmark
        task.readOnly = true;
        task.style = "transition: background .5s; background: #F8D7DA; border-color: transparent;";
    }
    else
    {
        symbol.innerHTML = "done";          // Switch to thin checkmark
        task.readOnly = false;
        task.style = "transition: background .5s; background: transparent; border-color: transparent;";
    }

    progress_status();

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


function progress_status() {
    document.getElementById("noTasks").style.display = none;
    document.getElementById("completedTasks").style.display = none;
}
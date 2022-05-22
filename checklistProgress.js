/* 
ID Categories:
    task_ = <li> task number
    checkB_ = <input> checkbox, <label> checkbox
    checkV_ = <span> checkbox symbol value
    taskV_ = <input> task text
*/
var visibTasks = 0;
var completeTasks = 0;
var progress = 0.0;


function add_task() {
    const task = document.getElementById("hiddenTasks").lastElementChild;   // Get next empty task
    const list = document.getElementById("visibleTasks");                   // Get visible list
    
    if (visibTasks < 10)
        list.insertBefore(task, list.children[0]);                  // Insert empty task at top

    visibTasks++;
    update_list_status();
}


function delete_task(elemIDNum) {

    const task = document.getElementById("task" + elemIDNum);   // Task <li> element
    const list = document.getElementById("hiddenTasks");        // Get hidden list
    list.insertBefore(task, list.children[0]);                  // Move to hidden list

    // Reset task properties
    if (document.getElementById("checkB" + elemIDNum).checked == true)  // Remove from completeTasks (if necessary)
        completeTasks--;
    document.getElementById("checkB" + elemIDNum).checked = false;      // Uncheck box
    document.getElementById("checkV" + elemIDNum).innerHTML = "done";   // Reset symbol
    document.getElementById("taskV" + elemIDNum).readOnly = false;      // Reset readOnly status
    document.getElementById("taskV" + elemIDNum).value = "";            // Reset text value
    document.getElementById("taskV" + elemIDNum).style = "background: transparent; border-color: transparent";      // Reset task color
    

    visibTasks--;
    update_list_status();
}


function toggle_task_status(elemID) {
    const button = document.getElementById("checkB" + elemID);   // Button element
    const symbol = document.getElementById("checkV" + elemID);   // Symbol element
    const task = document.getElementById("taskV" + elemID);      // Task element

    if (button.checked)
    {
        completeTasks++;
        symbol.innerHTML = "done_outline";  // Switch to thick checkmark
        task.readOnly = true;
        task.style = "transition: background .5s; background: #F8D7DA; border-color: transparent;";
    }
    else
    {
        completeTasks--;
        symbol.innerHTML = "done";          // Switch to thin checkmark
        task.readOnly = false;
        task.style = "transition: background .5s; background: transparent; border-color: transparent;";
    }

    update_list_status();
}


function toggle_add_button() {
    var button = document.getElementById("addButton");

    if (visibTasks < 10)        // All task elements are shown
        button.style.display = "block";
    else
        button.style.display = "none";
}


function calc_progress() {
    progress = (completeTasks / visibTasks) * 100;
}


function update_list_status() {
    
    const emptyList = document.getElementById("noTasks");
    const doneList = document.getElementById("finishTasks");

    if (visibTasks == 0)        // List is empty
    {
        emptyList.style.display = "block";
        doneList.style.display = "none";
    }
    else if (visibTasks == completeTasks)       // All visible tasks are done
    {
        emptyList.style.display = "none";
        doneList.style.display = "block";
    }
    else
    {
        emptyList.style.display = "none";
        doneList.style.display = "none";
    }

    calc_progress();
    toggle_add_button();

    // Debugging statement
    console.log(visibTasks + " : " + completeTasks + " = " + progress);
}
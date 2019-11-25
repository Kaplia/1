let completedTasks = document.querySelector('.completed-tasks').innerHTML;
let openTasks = document.querySelector('.open-tasks').innerHTML;

function completeTask() {
    if (openTasks != 0) {
        if (confirm("Are you sure you want to change the number of tasks?")) {
            openTasks--;
            completedTasks++;
        } else {
            alert("Cancel")
        }
        document.querySelector('.completed-tasks').innerHTML = completedTasks;
        document.querySelector('.open-tasks').innerHTML = openTasks;
    }
}

function imageClick(id) {
    document.querySelector('.notifications').innerHTML = id;
}

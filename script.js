let completedTasks = document.querySelector('.completed-tasks').innerHTML;
let openTasks = document.querySelector('.open-tasks').innerHTML;

function completeTask () {
	if (confirm("Are you sure you want to change the number of tasks?")) {
		if (openTasks != 0) {
			openTasks--;
			completedTasks++;
		}
		document.querySelector('.completed-tasks').innerHTML = completedTasks;
		document.querySelector('.open-tasks').innerHTML = openTasks;
		
    } else {
        alert("Cancel")
    }
}

let image = document.querySelector('.notifications').innerHTML;

var arr = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg'];

function imageClick (id) {
	document.querySelector('.notifications').innerHTML = id;
}

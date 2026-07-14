function addTask(){

    var input = document.getElementById("taskInput");

    var task = input.value;

    if(task==""){
        alert("Enter a task");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.innerHTML = task;

    span.onclick = function(){
        span.classList.toggle("completed");
    };
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "deleteBtn";

    btn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value="";
}
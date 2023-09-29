//Creat myTasks Array
let myTasks = [];

//Adds String to array
let addTask = (task) => {
    let length = myTasks.push(task);
    console.log("\nItem " + task + " has been added to Tasks");
    return length;
}

//List out the contents of the array
let listAllTasks = () => {
    myTasks.forEach((item) => {
        console.log("\n" +item);
    });//Call back function (Important exam question)
}

//Deletes an item from the array
deleteTask = (task) => {
    let index = myTasks.indexOf(task);

    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("\nItem " + task + " has been removed from Tasks")
    }

    //else for when item you want to delete is not present in the array
    else {
        console.log("\nItem " +task+ " was not found in Tasks")
    }
    return myTasks.length;
}

//Functions
addTask("Learn JS!");
addTask("Hello");
listAllTasks();
deleteTask("Learn JS!");
deleteTask("Goodbye");
listAllTasks();
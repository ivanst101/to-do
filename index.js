
// Storing elements into variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const buttonAdd = document.getElementById("btn");

 // Adding functionality when user clicks button
buttonAdd.addEventListener("click", function(){

 // Checking if input value is empty
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else {
     // Creating element that will later be appended into HTML page
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
     // Unicode Character (x)
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
 // Reseting input value
    inputBox.value = "";
    saveData();

});


listContainer.addEventListener("click", function(e){
 // Checking if user clicked x (span element that contains delete button (x))
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

// Save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    console.log(listContainer.textContent);
}

// Showing data from local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


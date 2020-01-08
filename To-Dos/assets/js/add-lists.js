let doList = document.querySelector(".do-lists");
let txt = document.getElementById("user-text");

document.querySelector(".addButton").addEventListener("click", addToDoList);

function addToDoList() {
    if (txt.value) {
        let newList = document.createElement("li");

        // Add new to do lists
        newList.appendChild(document.createTextNode(txt.value));
        doList.appendChild(newList);
        txt.value = "";
        
        // Delete selected list when clicking "X"
        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("X"));
        newList.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function(){
            newList.classList.add("delete");
        });

        // Mark as completed when clicked
        newList.addEventListener("click", function() {
            newList.classList.toggle("completed");
        });
    }
}
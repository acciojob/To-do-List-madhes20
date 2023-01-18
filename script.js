//your code here
let inputValue = document.querySelector("#newTodoInput");
let inputBtn = document.querySelector("#addTodoBtn");
let orderTag = document.querySelector("#todoList");

inputBtn.addEventListener("click",addList);

function addList(){
        if(inputValue.value != null && inputValue.value != ""){
    let listItem = document.createElement("li");
    listItem.append(inputValue.value);
    orderTag.append(listItem);
    }
}

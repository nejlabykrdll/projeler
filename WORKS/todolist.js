//tüm elementleri seçelim
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const filter = document.querySelectorAll("#filter");
const clerarButton = document.querySelectorAll("#clear-todos");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addTodo);
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {

        //     <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        //   </div>
        showAlert("danger", "Lütfen bir todo giriniz");

    }
    else {
        addTodoUI(newTodo);
    }




    e.preventDefault();
}

function showAlert(type,message) {

    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message;

    firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();

  },1000)
}








function addTodoUI(newTodo) { //string değer list item olarak arayüze eklenir

    //list item oluşturma
    const listItem = document.createElement("li");

    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class ='fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //textnode ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link)

    //todo liste list itemi ekleme 

    todoList.appendChild(listItem);
}
const todo=document.querySelector('.list-group-item')
const todoList=document.querySelector('.list-group')
const todoLastChild=document.querySelectorAll('.list-group-item:nth-child(4)')
const card=document.getElementsByClassName('card')
console.log(todoList)

let value;
//anneden cocuklara erismek
value=todoList;
value=todoList.children;     //array olarak cocuklarini verir 
value=todoList.children[3]
value=todoList.children[todoList.children.length-1]
value=todoList.children[3].textContent='changed'


value=Array.from(todoList.children)
value.forEach(function(todo){
    console.log(todo.textContent)
})


//cocuktan anneye erismek
 value=todo
let ul=todo.parentElement
let cardBody=ul.parentElement
let cardElement=cardBody.parentElement
let row=cardElement.parentElement
let container=row.parentElement

//kardesler arasinda gezmek

value=todo
value=todo.nextElementSibling
value=todoLastChild
value=todoLastChild.previousElementSibling


 console.log(todoLastChild)
 console.log(value)
 
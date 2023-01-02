const clearButton=document.querySelector('#todoClearButton')
clearButton.addEventListener('click',changeTitle);


function changeTitle(e){
// document.querySelectorAll('.card-title')[1].textContent='Todo basligi degisti...'
console.log(e.type)
console.log(e.target)
console.log(e.target.textContent)
console.log(e.target.className)
}  //e parametresi event objesi doner
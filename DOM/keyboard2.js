const cardTitle=document.querySelectorAll('.card-title')[0]    //inputa bir sey girildiginde
const input=document.querySelector('#todoName')
input.addEventListener('keyup',run)
function run(e){
cardTitle.textContent=e.target.value   // target inputun calistigi html etiketini verir 
}   

//bu kod klavyeden inputa girilen degeri title a yazdirir.
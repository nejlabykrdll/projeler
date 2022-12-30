const cardTitle=document.querySelectorAll('.card-title')[1]
cardTitle.addEventListener('click',run)

function run(e){
    console.log(e.type)
}
const row=document.querySelector('.row');
value=row.children[0].children[3].children[0].textContent='Todo listesi basligi degisti';
let todo3=row.children[0].children[3].children[2].children[2]
todo3.textContent='todo3 degisti'
todo3.style.backgroundColor='grey';
todo3.style.color='red'
console.log(value)


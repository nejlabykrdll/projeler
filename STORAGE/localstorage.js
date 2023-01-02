localStorage.setItem('motion1','push up')
localStorage.setItem('motion2','barfix')
localStorage.setItem('motion3','burpee')
localStorage.setItem('motion4','squat')


let value=localStorage.getItem('motion1')
console.log(value)   
localStorage.removeItem('motion4')

localStorage.clear()

let motions=['push up','barfix','burpee','squat','chin up']
localStorage.setItem('motions',JSON.stringify(motions))
let value1=JSON.parse(localStorage.getItem('motions'))
console.log(value)
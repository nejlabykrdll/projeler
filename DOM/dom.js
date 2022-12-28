//getElementById  id ye göre elementı yakalar
//getElementByClass  class ismine göre yakalar
//ID

// const button=document.getElementById("todoAddButton");
// console.log(button)
// console.log(button.id) butonun özelliklerinden id olanı bize verir
// console.log(button.getAttribute("id")) butonun özelliklerinden id olanı bize verir
// console.log(button.className);   classın içini verir
// console.log(button.getAttribute("class"))  classın içini verir
// const classListesi=button.classList[3];  classları liste olarak çeker(array)



// const classListesi=button.classList;
// classListesi.forEach(function(className){
//     console.log(className)
// })
// console.log(classListesi); HER BİR CLASSNAME YAZDIRIR.


/* let buttonText=button.textContent;     yakalamış olduğumuz elementin içindeki textleri verir.
 let buttonText2=button.innerHTML; 
 console.log(buttonText);
 console.log(buttonText2);
*/

// button.textContent="<b> todo ekleyin<b/>";  string olarak algılar
// button.textContent="<b> todo ekleyin<b/>"; html etiketi olarak algılayıp değiştirir

//CLASS

/* const todoList=Array.from(document.getElementsByClassName("list-group-item"))
 todoList.forEach(function(todo){
    console.log(todo);
 })
 console.log(todoList)      class ismi "list-group-item" olanları döner

*/

//TAGNAME

/*
const forms=document.getElementsByTagName("form");    etiketin ismini yakalar
console.log(forms[1])
*/


//querySelector -querySelectorAll  ------------ üçünün yaptığı işi tek başına yapar.


/*const clearButton=document.querySelector("#todoClearButton"),,,,,,,,,,(".list-group-") class ismini secer ama sadece bir tane yazdırır,birden fazla varsa querySelectorAll kullan
console.log(clearButton); ----------etiket id seçer
*/
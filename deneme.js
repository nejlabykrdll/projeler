let mat1= Number(prompt("mat1 notunuzu giriniz"));
let mat2= Number(prompt("mat2 notunuzu giriniz"));
let turk1=Number(prompt("türkçe1 notunuzu giriniz"));
let turk2=Number(prompt("turkce2 notunuzu giriniz"));
let matort=(mat1+mat2)/2

let turkort=(turk1+turk2)/2

if(matort>=50 && turkort>=50){
    alert("geçtiniz:" );
    console.log("geçtiniz:");
}
else{
    alert("kaldınız:")
    console.log(" kaldınız geçmiş olsun")
}

//return öğreten örnek




function square(x) {
    // console.log(x*x);
    //return yapmadıgımızdan önceki fonksiyonun değerini başka yerde kullanamıyoruz.
    return x * x;
}
function cube(x) {
    // console.log(x * x * x);
    return x*x*x;
}
let a = square(12);
a = cube(a); 
console.log(a);

//fonksiyon içinde returnden sonrası çalışmaz
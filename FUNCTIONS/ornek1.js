function toplam(a, b) {
    let toplam = a + b
    return toplam;
}

function fark(a, b) {
    let fark = a - b
    return fark;

}

function carpim(a, b) {
    let carpim = a * b
    return carpim;
}

function bolum(a, b) {
    let bolum = a / b
    return bolum;
}
// let a=5
// let b=4
// let islem='/'
// if(islem=='+'){
//     console.log(toplam(a,b))
// } 
// else if(islem=='-'){
//     console.log(fark(a,b))
// }
// else if(islem=='*'){
//     console.log(carpim(a,b))
// }
// else if(islem=='/'){
//     console.log(bolum(a,b))
// }
// else{
//     console.log('tanimli bir islem giriniz')
// }
sonuc=1
for(let i=1;i<=5;i++){
    sonuc=carpim(sonuc,i)
}
console.log(sonuc)
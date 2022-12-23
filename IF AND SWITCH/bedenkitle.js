// beden kitle endeksi hesaplama 
let kilo= Number(prompt("kilonuzu giriniz"));
let boy= Number(prompt("boyunuzu metre cimsinden giriniz "))
let sonuc=kilo/(boy**2)

if(sonuc<18.5){
     console.log("ideal kilonun altındasınız ")
}
else if(sonuc>=18.5 && sonuc<=29.9){
    console.log("ideal kilonun üstündesiniz ")
}
else if(sonuc>=25 && sonuc<=29.9){
    console.log("ideal kilodasınız ")
}
else if(sonuc>=30 && sonuc<=39.9){
    console.log("ideal kilonun çok üstünde obez ")
}
else if(sonuc>=40){
    console.log("ideal kilonun çok üstünde morbid obez ")
}
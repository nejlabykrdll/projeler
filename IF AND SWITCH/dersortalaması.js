//ders ortalaması bulma örneği
//vize1 %30 vize2 %30 final %40

let vize1 = Number(prompt("vize1 notunuzu giriniz"));
let vize2 = Number(prompt("vize2 notunuzu giriniz"));
let final = Number(prompt("final notunuzu giriniz"));
let avarege= (vize1*0.3)+(vize2*0.3)+(final*0.4);
if(avarege>=60){
    alert("dersten geçtiniz tebrikler:");
    console.log("dersten geçtiniz tebrikler");

}
else{
    alert("kaldınız, geçmiş olsun:");
    console.log("kaldınız, geçmiş olsun:");
}
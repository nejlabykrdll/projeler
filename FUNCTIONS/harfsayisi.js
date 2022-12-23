let metin="su anda ofiste foksiyon ogrenmekteyim";
let harf=prompt("harfi giriniz");
let sonuc=bul(harf);
alert("harf sayisi :"+ sonuc);
 
function bul(p_harf){
    let toplam=0;
    for(let i=0;i<metin.length;i++){
        if(metin.charAt(i)==harf){
            toplam+=1;
        }
    }
    return toplam;
}

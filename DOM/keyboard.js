document.addEventListener('keypress',run)  //sadece harfleri ve sayilari algilar keyDown hepsini algilar
function run(e){
    console.log(e.key)   //klavyede hangi tusa basildigini verir
    console.log(e.keyCode) //ascii tablosundaki karsiligini verir e.which de kullanilabilir
}
//keyUp klavyeden alimizi cektigimizde calisir
//e.preventDefault sayfa yenilemeyi engeller
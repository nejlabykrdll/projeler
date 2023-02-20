let ay = 2
let gün = 22

if ((ay == 1 && gün >= 21 && gün <= 31) || (ay == 2 && gün >= 1 && gün <= 19)) {
    alert("burcunuz kova")
    console.log("burcunuz kova")
}
else if ((ay == 2 && gün >= 20 && gün <= 31) || (ay == 3 && gün >= 1 && gün <= 20)) {
    alert("burcunuz balık")
    console.log("burcunuz balık")
}
else if ((ay == 3 && gün >= 21 && gün <= 31) || (ay == 4 && gün >= 1 && gün <= 20)) {
    alert("burcunuz koç")
    console.log("burcunuz koç")
}
else if ((ay == 4 && gün >= 21 && gün <= 31) || (ay == 5 && gün >= 1 && gün <= 20)) {
    alert("burcunuz boğa")
    console.log("burcunuz boğa")
}
else if ((ay == 5 && gün >= 21 && gün <= 31) || (ay == 6 && gün >= 1 && gün <= 21)) {
    alert("burcunuz ikizler")
    console.log("burcunuz ikizler")
}
else if ((ay == 6 && gün >= 22 && gün <= 31) || (ay == 7 && gün >= 1 && gün <= 22)) {
    alert("burcunuz yengeç")
    console.log("burcunuz yengeç")
}
else if ((ay == 7 && gün >= 23 && gün <= 31) || (ay == 8 && gün >= 1 && gün <= 23)) {
    alert("burcunuz aslan")
    console.log("burcunuz aslan")
}
else if ((ay == 8 && gün >= 24 && gün <= 31) || (ay == 9 && gün >= 1 && gün <= 23)) {
    alert("burcunuz başak")
    console.log("burcunuz başak")
}
else if ((ay == 9 && gün >= 24 && gün <= 31) || (ay == 10 && gün >= 1 && gün <= 23)) {
    alert("burcunuz terazi")
    console.log("burcunuz terazi")
}
else if ((ay == 10 && gün >= 24 && gün <= 31) || (ay == 11 && gün >= 1 && gün <= 22)) {
    alert("burcunuz akrep")
    console.log("burcunuz akrep")
}
else if ((ay == 11 && gün >= 23 && gün <= 31) || (ay == 12 && gün >= 1 && gün <= 21)) {
    alert("burcunuz yay")
    console.log("burcunuz yay")
}
else if ((ay == 12 && gün >= 22 && gün <= 31) || (ay == 1 && gün > 1 && gün <= 20)) {
    alert("burcunuz oğlak")
    console.log("burcunuz oğlak")
}
else{
    alert("doğumgünüzü düzgün girin")

}

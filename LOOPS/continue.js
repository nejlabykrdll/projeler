let sayac = 0;
while (sayac <= 10) {
    sayac++;
    if(sayac>10){
        break;
    }

    if (sayac == 8) {
        continue;
    }
    console.log(sayac);
}
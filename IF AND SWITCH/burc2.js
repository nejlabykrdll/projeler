let ay = 2
let gün = 8
switch (ay) {
    case 1:
        if (gün >= 1 && gün <= 20){

            
            console.log("burcunuz oğlak");
        alert("burcunuz oğlak")
        }
            else if (gün >= 21 && gün <= 31){
            console.log("burcunuz kova");
        alert("burcunuz kova")
            }


        break;
    case 2:
        if ( gün >= 1 && gün <= 19){

            
            console.log("burcunuz kova");
        alert("burcunuz kova")
        }
            else if (gün >= 20 && gün <= 31){
            console.log("burcunuz balık");
        alert("burcunuz balık")
            }
        

        break;
    case 3:
        if ( gün >= 1 && gün <= 20){

            
            console.log("burcunuz balık");
        alert("burcunuz balık")
        }
            else if (gün >= 21 && gün <= 31){
            console.log("burcunuz koç");
        alert("burcunuz koç")
            }
        
        break;
    case 4:
        if ( gün >= 1 && gün <= 20){

            
            console.log("burcunuz koç");
        alert("burcunuz koç")
        }
            else if ( gün >= 21 && gün <= 31){
            console.log("burcunuz boğa");
        alert("burcunuz boğa")
            }
        break;
    case 5:
        if (gün >= 1 && gün <= 20){

            
            console.log("burcunuz boğa");
        alert("burcunuz boğa")
        }
            else if(gün >= 21 && gün <= 31){
            console.log("burcunuz ikizler");
        alert("burcunuz ikizler")
            };
        break;
    case 6:
        if ( gün >= 1 && gün <= 21){

            
            console.log("burcunuz ikizler");
        alert("burcunuz ikizler")
        }
            else if( gün >= 22 && gün <= 31){
            console.log("burcunuz yengeç");
        alert("burcunuz yengeç")
            };
        break;
    case 7:
        if (ay == 7 && gün >= 1 && gün <= 22){

            
            console.log("burcunuz yengeç");
        alert("burcunuz yengeç")
        }
            else if(ay == 7 && gün >= 23 && gün <= 31){
            console.log("burcunuz aslan");
        alert("burcunuz aslan")
            };
        break;
    case 8:
        if ( gün >= 1 && gün <= 23){

            
            console.log("burcunuz aslan");
        alert("burcunuz aslan")
        }
            else if(gün >= 24 && gün <= 31){
            console.log("burcunuz başak");
        alert("burcunuz başak")
            };
        break;
    case 9:
        if ( gün >= 1 && gün <= 23){

            
            console.log("burcunuz başak");
        alert("burcunuz başak")
        }
            else if( gün >= 24 && gün <= 31){
            console.log("burcunuz terazi");
        alert("burcunuz terazi")
            };
        break;
    case 10:
        if ( gün >= 1 && gün <= 23){

            
            console.log("burcunuz terazi");
        alert("burcunuz terazi")
        }
            else if(gün >= 24 && gün <= 31){
            console.log("burcunuz akrep");
        alert("burcunuz akrep")
            };
        break;
    case 11:
        if (ay == 11 && gün >= 1 && gün <= 22){

            
            console.log("burcunuz akrep");
        alert("burcunuz akrep")
        }
            else if(ay == 11 && gün >= 23 && gün <= 31){
            console.log("burcunuz yay");
        alert("burcunuz yay")
            };
        break;
    case 12:
        if (ay == 12 && gün >= 1 && gün <= 21){

            
            console.log("burcunuz yay");
        alert("burcunuz yay")
        }
            else if(ay == 12 && gün >= 22 && gün <= 31){
            console.log("burcunuz oğlak");
        alert("burcunuz oğlak")
            };
        break;











    default:
        console.log("doğum ayınızı 1 12 arasında giriniz")
}
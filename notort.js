let mat1=90
let mat2=67
let ort=(mat1+mat2)/2
let sinif="12b bilişim"
let ogrenci="nejla"

if(sinif=="12b bilişim" && ogrenci=="nejla" ){
    alert("ortalama=" + ort);

    
     if(ort>=90){
         alert("harf notunuz AA")
         console.log("harf notunuz AA")
     } 
     else if(ort>=85){
          alert("harf notunuz BA")
          console.log("harf notunuz BA")
     }
      else if(ort>=75){
           alert("harf notunuz CB ")
           console.log("harf notunuz CB")
     }
     else if(ort>=65){
            alert("harf notunuz DC ")
            console.log("harf notunuz DC")

     }
     else if(ort>=60){
            alert("harf notunuz DD ")
            console.log("harf notunuz DD")
     }
     else if(ort>=50){
            alert("harf notunuz FD ")
            console.log("harf notunuz FD")
     }
     else if(ort<50){
            alert("harf notunuz FF ")
            console.log("harf notunuz DD")
     } 
     else{
           alert("harf notunuz hesaplanamadi")
     }
 
}
    
else {

    alert("sinifiniz dogru değildir")
 }
 


//deger ekleme

sessionStorage.setItem("350","enes")
sessionStorage.setItem("216","yasin")
sessionStorage.setItem("154","bilal")

//deger silme
sessionStorage.removeItem("154")

let value=sessionStorage.getItem('350')
if(value===null){
    console.log('deger bulunamadi')
}
else{
    console.log('deger bulundu:',value)
}

// hepsini silme
sessionStorage.clear()

//array yazdirma
let names=['ali','enes','kubra','adem','aysenur'];
sessionStorage.setItem('names',JSON.stringify(names) )

let value2 =JSON.parse(sessionStorage.getItem('names'))
value2.forEach(function(name){
    console.log(name)
})

    
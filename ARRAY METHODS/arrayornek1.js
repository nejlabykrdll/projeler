let urun1 = {
    isim: 'ACER Swift',
    kategori: 'teknoloji',
    fiyat: 6.219

}
let urun2 = {
    isim: 'acer nitro 5',
    kategori: 'teknoloji',
    fiyat: 15.475

}
let urun3 = {
    isim: 'lenovo v15',
    kategori: 'teknoloji',
    fiyat: 10.999

}
let urun4 = {
    isim: 'lenovo v14 ',
    kategori: 'teknoloji',
    fiyat: 4.399

}
let urun5 = {
    isim: 'lenovo ideapad',
    kategori: 'teknoloji',
    fiyat: 4.510

}
let urunler = [urun1, urun2, urun3, urun4, urun5]
let filtreliUrunler = []
let kullaniciUrunIsmi = prompt('urun ismi giriniz')
filtreliUrunleriDoldur(urunler)
filtreliUrunleriYazdir(filtreliUrunler)


function filtreliUrunleriDoldur(urunlerr) {
    urunlerr.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);

        }

    })
}

function filtreliUrunleriYazdir(urunler) {
    urunler?.forEach(function (urun) {
        console.log('---------------------------------------------------------------')
        console.log('|' + urun.isim + '|' + urun.kategori);
    })
}   
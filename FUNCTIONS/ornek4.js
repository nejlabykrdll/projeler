function merhaba(name, age) {
    if (typeof name === 'undefined') name = 'bilgi yok';
    if (typeof age === 'undefined') age = 'bilgi yok';
    console.log(`isim: ${name} yaş: ${age}`);
}
merhaba("murat",25);
merhaba();
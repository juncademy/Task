let totalBelanja = 350000;
let diskon;

if(totalBelanja >= 500000) {
    console.log(diskon = 0.20)
}
else if(totalBelanja >= 200000) {
    console.log(diskon = 0.10)
}
else if(totalBelanja >= 100000) {
    console.log(diskon = 0.05)
}

hargaDiskon = totalBelanja * diskon;
totalBayar = totalBelanja - hargaDiskon;

console.log("Total belanja: Rp" + totalBelanja);
console.log("Diskon: " + (diskon * 100) + "%")
console.log("Total bayar: Rp" + totalBayar)
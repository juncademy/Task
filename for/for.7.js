let kata = "programming";
let vokal = "aiueo";
let jumlahVokal = 0;
for(let i = 0; i <= kata.length; i++) {
    if(vokal.includes(kata[i])) {
        jumlahVokal++;
    }
}
console.log("Jumlah vokal: ", jumlahVokal);
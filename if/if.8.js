let berat = 70;
let tinggi = 1.75;
let BMI = berat / (tinggi ** 2)
if(BMI < 18.5) {
    console.log(kategori = "Underweight")
}
else if(BMI < 25) {
    console.log(kategori = "normal")
}
else if(BMI < 30) {
    console.log(kategori = "Overweight")
}
else (kategori = "Obese")
console.log("BMI: " + Math.round(BMI))
console.log("Kategori: " + kategori)
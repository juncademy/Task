function cekSuhu(celsius) {
  if (celsius >= 35) {
    console.log("Sangat Panas");
  } else if (celsius >= 25) {
    console.log("Panas");
  } else if (celsius >= 15) {
    console.log("Hangat");
  }
}

console.log("Suhu 28°C: ");
cekSuhu(28);


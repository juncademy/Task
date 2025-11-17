let current = 100;
let langkah = 1;

while (true) {
  let hasil = current / 2;
  console.log(`Langkah ${langkah}: ${current} / 2 = ${hasil}`);
  
  if (hasil < 1) {
    console.log(`Proses selesai setelah ${langkah} langkah`);
    break;
  }
  
  current = hasil;
  langkah++;
}

let text = "programming";
let index = 0;
let position = -1;

while (index < text.length) {
  if (text.charAt(index) === 'a') {
    position = index;
    break;   // hentikan loop saat 'a' ditemukan
  }
  index++;
}

console.log("Huruf 'a' ditemukan di posisi:", position);

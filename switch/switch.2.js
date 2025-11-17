function pilihMenu(pilihan) {
  let menu, harga;

  switch (pilihan) {
    case 1:
      menu = "Nasi Goreng";
      harga = 15000;
      break;
    case 2:
      menu = "Mie Ayam";
      harga = 12000;
      break;
    case 3:
      menu = "Bakso";
      harga = 10000;
      break;
    case 4:
      menu = "Es Teh";
      harga = 5000;
      break;
    default:
      console.log("Menu tidak tersedia!");
      return;
  }

  console.log("Anda memilih: " + menu);
  console.log("Harga: Rp " + harga);
}

pilihMenu(2);

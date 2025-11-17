function trafficLight(color) {
  let message;

  switch (color) {
    case "merah":
      message = "Berhenti";
      break;
    case "kuning":
      message = "Hati-hati, bersiap berhenti";
      break;
    case "hijau":
      message = "Jalan";
      break;
    default:
      message = "Lampu rusak";
  }

  return message;
}

// Contoh penggunaan:
console.log("Lampu kuning: " + trafficLight("kuning"));

function getDayName(number) {
  let dayName;

  switch (number) {
    case 1:
      dayName = "Senin";
      break;
    case 2:
      dayName = "Selasa";
      break;
    case 3:
      dayName = "Rabu";
      break;
    case 4:
      dayName = "Kamis";
      break;
    case 5:
      dayName = "Jumat";
      break;
    case 6:
      dayName = "Sabtu";
      break;
    case 7:
      dayName = "Minggu";
      break;
  }

  return dayName;
}

console.log("Hari ke-3: " + getDayName(3));

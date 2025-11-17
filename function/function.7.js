function createProfile(nama, status = "Member") {
  return `Profil: ${nama} (${status})`;
}
console.log(createProfile("Budi"));         // status default
console.log(createProfile("Sari", "Admin")); // status custom

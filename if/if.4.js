function cekPassword(password) {
  const correctPassword = "admin123";

  if (password === correctPassword) {
    console.log("Login berhasil! Selamat datang.");
  } else {
    console.log("Password salah!");
  }
}

cekPassword("admin123");

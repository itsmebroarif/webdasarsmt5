// Fungsi untuk menghitung volume balok
function hitungVolumeBalok() {
  // Mengambil nilai panjang, lebar, dan tinggi dari input form dan mengubahnya menjadi angka desimal
  var panjang = parseFloat(document.getElementById("panjangBalok").value);
  var lebar = parseFloat(document.getElementById("lebarBalok").value);
  var tinggi = parseFloat(document.getElementById("tinggiBalok").value);

  // Menghitung volume balok menggunakan rumus: Panjang * Lebar * Tinggi
  var volume = panjang * lebar * tinggi;

  // Menampilkan hasil perhitungan volume balok menggunakan SweetAlert
  Swal.fire({
    title: "Volume Balok",
    text: "Volume Balok: " + volume,
    icon: "info",
    confirmButtonText: "OK",
  });
}

// Fungsi untuk menghitung volume tabung
function hitungVolumeTabung() {
  // Mengambil nilai jejari dan tinggi dari input form dan mengubahnya menjadi angka desimal
  var jejari = parseFloat(document.getElementById("jejariTabung").value);
  var tinggi = parseFloat(document.getElementById("tinggiTabung").value);

  // Menghitung volume tabung menggunakan rumus: 3.14 * Jejari^2 * Tinggi
  var volume = 3.14 * jejari * jejari * tinggi;

  // Menampilkan hasil perhitungan volume tabung menggunakan SweetAlert
  Swal.fire({
    title: "Volume Tabung",
    text: "Volume Tabung: " + volume,
    icon: "info",
    confirmButtonText: "OK",
  });
}

// Fungsi untuk menghitung volume bola
function hitungVolumeBola() {
  // Mengambil nilai jejari dari input form dan mengubahnya menjadi angka desimal
  var jejari = parseFloat(document.getElementById("jejariBola").value);

  // Menghitung volume bola menggunakan rumus: 3.14 * Jejari^3
  var volume = 3.14 * jejari * jejari * jejari;

  // Menampilkan hasil perhitungan volume bola menggunakan SweetAlert
  Swal.fire({
    title: "Volume Bola",
    text: "Volume Bola: " + volume,
    icon: "info",
    confirmButtonText: "OK",
  });
}

// Fungsi untuk menghitung volume prisma segitiga
function hitungVolumePrismaSegitiga() {
  // Mengambil nilai tinggi alas, panjang alas, dan tinggi prisma dari input form dan mengubahnya menjadi angka desimal
  var tinggiAlas = parseFloat(
    document.getElementById("tinggiAlasPrisma").value
  );
  var panjangAlas = parseFloat(
    document.getElementById("panjangAlasPrisma").value
  );
  var tinggiPrisma = parseFloat(document.getElementById("tinggiPrisma").value);

  // Menghitung volume prisma segitiga menggunakan rumus: 0.5 * Tinggi Alas * Panjang Alas * Tinggi Prisma
  var volume = 0.5 * tinggiAlas * panjangAlas * tinggiPrisma;

  // Menampilkan hasil perhitungan volume prisma segitiga menggunakan SweetAlert
  Swal.fire({
    title: "Volume Prisma Segitiga",
    text: "Volume Prisma Segitiga: " + volume,
    icon: "info",
    confirmButtonText: "OK",
  });
}

// Fungsi untuk menghitung volume kerucut
function hitungVolumeKerucut() {
  // Mengambil nilai jejari alas dan tinggi kerucut dari input form dan mengubahnya menjadi angka desimal
  var jejari = parseFloat(document.getElementById("jejariKerucut").value);
  var tinggi = parseFloat(document.getElementById("tinggiKerucut").value);

  // Menghitung volume kerucut menggunakan rumus: (1/3) * 3.14 * Jejari^2 * Tinggi
  var volume = (1 / 3) * 3.14 * jejari * jejari * tinggi;

  // Menampilkan hasil perhitungan volume kerucut menggunakan SweetAlert
  Swal.fire({
    title: "Volume Kerucut",
    text: "Volume Kerucut: " + volume,
    icon: "info",
    confirmButtonText: "OK",
  });
}

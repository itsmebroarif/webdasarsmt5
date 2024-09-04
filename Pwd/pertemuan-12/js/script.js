//3. Alert sebagai penanda kalau website sudah berhasil dibuka
alert("Hai, Website Berhasil Dibuka");

//4. Dokumen berhasil di render dengan menggunakan event listener
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script untuk Pertemuan 12 telah dimuat!");
});

//5. Terakhir, Disini saya akan membuat fitur prompt dan merender kedalam website
const nama = prompt("Masukan Nama Mu Disni");
document.write(
  "Hallo ",
  nama,
  " Nama Mu Berhasil Di Print menggunakan Javascript"
);

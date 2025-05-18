const readline = require("readline-sync");

const listBarang = [
  { nama: "Indomie", harga: 3000 },
  { nama: "Aqua", harga: 5000 },
  { nama: "Snack", harga: 7000 },
];

const keranjang = [];
isExit = false;

const lihatDaftarBarang = () => {
  console.log("=====================");
  console.log("Daftar Barang:");
  listBarang.forEach((item) => {
    console.log(`${item.nama} Harga Rp${item.harga}`);
  });
  console.log("=====================");
};

const tambahBarang = () => {
  const namaBarang = readline.question("Masukkan nama barang: ");
  const jumlahBarang = readline.questionInt("Masukkan jumlah barang: ");
  const barang = listBarang.find((item) => item.nama.toLowerCase() === namaBarang.toLowerCase());

  if (barang) {
    const totalHarga = barang.harga * jumlahBarang;
    const itemKeranjang = {
      nama: barang.nama,
      harga: barang.harga,
      jumlah: jumlahBarang,
      total: totalHarga,
    };
    keranjang.push(itemKeranjang);
    console.log("=====================");
    console.log(`Barang ${barang.nama} berhasil ditambahkan ke keranjang.`);
    console.log("=====================");
  } else {
    console.log("Barang tidak ditemukan.");
  }
};

const lihatKeranjang = () => {
  console.log("=====================");
  console.log("Keranjang Belanja:");
  if (keranjang.length === 0) {
    console.log("Keranjang kosong.");
  } else {
    keranjang.forEach((item) => {
      console.log(`${item.nama} - ${item.jumlah} pcs - Rp${item.total}`);
    });
  }
  console.log("=====================");
};

const hapusBarang = () => {
  const namaBarang = readline.question("Masukan nama barang yang ingin dihapus: ");
  const indexBarang = keranjang.find((item) => item.nama.toLowerCase() === namaBarang.toLowerCase());

  if (indexBarang) {
    keranjang.splice(keranjang.indexOf(indexBarang), 1);
    console.log(`Barang ${namaBarang} berhasil dihapus dari keranjang.`);
  } else {
    console.log(`Barang ${namaBarang} tidak ditemukan di keranjang.`);
  }
};

const cetakStruk = () => {
  console.log("=====================");
  console.log("Struk Belanja:");
  if (keranjang.length === 0) {
    console.log("Keranjang kosong.");
  } else {
    let totalBayar = 0;
    keranjang.forEach((item) => {
      console.log(`${item.nama} - ${item.jumlah} buah - Rp${item.total}`);
      totalBayar += item.total;
    });
    console.log(`Total Bayar: Rp${totalBayar}`);
  }
  console.log("=====================");
};

while (isExit === false) {
  let pilihan = readline.question(
    `Pilih menu: 
    1. Tampilkan daftar barang 
    2. Tambah barang ke keranjang
    3. Tampilkan keranjang
    4. Hapus barang dari keranjang 
    5. Cetak Struk
    6. Keluar
    Masukkan pilihan (1-6):
    `
  );
  console.log("Menu yang dipilih: " + pilihan);
  console.log("=====================");

  switch (pilihan) {
    case "1":
      lihatDaftarBarang();
      break;
    case "2":
      tambahBarang();
      break;
    case "3":
      lihatKeranjang();
      break;
    case "4":
      hapusBarang();
      break;
    case "5":
      cetakStruk();
      break;
    case "6":
      console.log("Terima kasih telah berbelanja!");
      isExit = true;
      break;
    default:
      console.log("Pilihan tidak valid. Silakan coba lagi.");
  }
}

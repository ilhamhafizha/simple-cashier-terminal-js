const readline = require("readline-sync");

// User :
// - Melihat list siswa
// - Menambahkan siswa
// - Menghapus siswa

const students = [];
let isExit = false;

const melihatDaftarSiswa = (students) => {
  if (students.length === 0) {
    console.log("Tidak ada siswa yang terdaftar.");
  } else {
    console.log("Daftar Siswa:\n");
    students.forEach((student, index) => {
      console.log(`${index + 1}. ${student.nis} - ${student.name}`);
    });
  }
};

const menambahkanSiswa = (students) => {
  const newNisStudent = readline.question("Masukkan nis siswa baru : ");
  const newNameStudent = readline.question("Masukkan nama siswa baru : ");
  if (newNisStudent && newNameStudent) {
    const newStudent = {
      nis: newNisStudent,
      name: newNameStudent,
    };
    students.push(newStudent);
    console.log(`Siswa ${newNameStudent} berhasil ditambahkan.`);
  } else {
    console.log("Nama siswa tidak boleh kosong.");
  }
};

const menghapusSiswa = (students) => {
  const studentToRemove = readline.question("Masukkan nama siswa atau nis yang ingin dihapus : ");
  if (!isNaN(studentToRemove)) {
    let index = -1;
    for (let i = 0; i < students.length; i++) {
      if (students[i].nis.toLowerCase() === studentToRemove.toLowerCase()) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      const removedStudent = students.splice(index, 1);
      console.log(`Siswa ${removedStudent.name} berhasil dihapus.`);
    } else {
      console.log("NIS tidak valid.");
    }
  } else {
    const index = -1;
    for (let i = 0; i < students.length; i++) {
      if (students[i].name.toLowerCase() === studentToRemove.toLowerCase()) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      students.splice(index, 1);
      console.log(`Siswa ${studentToRemove} berhasil dihapus.`);
    } else {
      console.log(`Siswa ${studentToRemove} tidak ditemukan.`);
    }
  }
};

const runExit = () => {
  console.log("Terima kasih! Program selesai.");
  return true;
};

while (isExit === false) {
  let choice = readline.question(
    `Masukan pilihan : 
    1. Melihat daftar siswa
    2. Menambahkan siswa
    3. Menghapus siswa
    4. Keluar
    `
  );
  switch (choice) {
    case "1":
      melihatDaftarSiswa(students);
      break;
    case "2":
      menambahkanSiswa(students);
      break;
    case "3":
      menghapusSiswa(students);
      break;
    case "4":
      isExit = runExit();
      break;
    default:
      console.log("Pilihan tidak valid. Silakan coba lagi.");
  }
}

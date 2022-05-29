// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
    for(let pegawai of arrPegawai) {
      let listNama = `${pegawai.namaDepan} ${pegawai.namaBelakang}`;
      hasilLooping.push(listNama);
    }
  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = null;
    for(let pria of arrPegawai) {
      if(pria.jenisKelamin == 'M') {
        jumlahPria++;
      }
    }
  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = null;
    for(let wanita of arrPegawai) {
      if(wanita.jenisKelamin == 'M') {
        jumlahWanita++;
      }
    }
  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komentar = null;
    for(let i of arrPegawai) {
      if((i.jenisKelamin == 'M') > (i.jenisKelamin == 'F')) {
        komentar = console.log("Jumlah Pria lebih banyak dari Wanita");
      } else if ((i.jenisKelamin == 'F') > (i.jenisKelamin == 'M')) {
        komentar = console.log("Jumlah Wanita lebih banyak dari Pria");
      } else if ((i.jenisKelamin == 'F') == (i.jenisKelamin == 'M')) {
        komentar = console.log("Jumlah Pria dan Wanita berimbang");
      }
    }
  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };

}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;

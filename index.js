// Soal
// 1. jika student mengisi MAU pada student wish, maka prompt lagi 
//    pertanyaan, BERAPA KAH NILAI AKHIR SMA/SMK mu ?
// 2. jika nilai akhir dari SMA/SMK mu kurang dari 30, maka 
//    alert "tidak mungkin masuk univ"
// 3. jika nilai akhir dari SMA/SMK mu kurang dari 50, maka 
//    lakukan perhitungan chanceGetUniv = 
//     3a. jika hasil chanceGetUniv dibawah 50 persen, berikan
//         alert "hmm kemungkinan kamu (NAMA) kecil masuk UNIV"
//     3b. jika hasil chanceGetUniv diatas 50 persen, berikan
//         alert "hmm kemungkinan kamu (NAMA) bisa masuk UNIV"
// 4. jika hasil chanceGetUniv diatas 70 persen DAN Nilai SMA
//    nya diatas 60 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"
// 5. jika hasil chanceGetUniv diatas 70 persen ATAU Nilai SMA
//    nya diatas 80 maka berikan alert "hei (NAMA) pasti masuk UNIV dengan (NILAI SMA) mu yang besar itu"


let name = prompt("Siapa Nama mu?")
let choice = prompt("Mau masuk Universitas gak?")

if (choice === "Mau" || choice === "mau") {
    let grade = prompt("Berapa nilai akhir SMA/SMK mu?")
    let chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv) + 1
    if (grade < 30) {
        alert("Tidak mungkin masuk univ")
    } else if (grade < 50) {
        if (chanceGetUniv < 50) {
            alert(`Hmm kemungkinan kamu ${name} kecil masuk UNIV`)
        } else {
            alert(`Hmm kemungkinan kamu ${name} bisa masuk UNIV`)
        }
    } else if (chanceGetUniv > 70 && grade > 60) {
        alert(`Hei ${name} pasti masuk UNIV dengan nilai ${grade} mu yang besar itu`)
    } else if (chanceGetUniv > 70 || grade > 80) {
        alert(`Hei ${name} pasti masuk UNIV dengan nilai ${grade} mu yang besar itu`)
    } else {
        alert(`${name} Nilai kamu ${grade} dengan probabilitas masuk ${chanceGetUniv} %`)
    }
} else if (choice === "Tidak" || choice === "tidak") {
    alert(`Terserah lu ${name}!`)
} else {
    alert("Pilihannya Mau atau Tidak")
}


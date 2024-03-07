alert("Selamat datang");

let lagi = true;

while (lagi) {
    let nama = prompt("Masukkan nama anda");
    alert("Hallo" + " " + nama);

    lagi = confirm("Mau coba lagi?");
}

alert("Terima kasih");
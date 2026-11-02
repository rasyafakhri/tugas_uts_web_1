// js/script.js

// 1. Logika Login (Mencocokkan dengan dataPengguna dari data.js)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        // Cari data pengguna di dalam array dataPengguna
        const userFound = dataPengguna.find(user => user.email === emailInput && user.password === passwordInput);

        if (userFound) {
            // Simpan nama/role user ke localStorage jika diperlukan untuk greeting
            localStorage.setItem("namaUser", userFound.nama);
            localStorage.setItem("roleUser", userFound.role);
            
            alert(`Login Berhasil! Selamat datang, ${userFound.nama} (${userFound.role})`);
            window.location.href = "dashboard.html";
        } else {
            alert("Email/password yang anda masukkan salah!");
        }
    });
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// 2. Greeting Dinamis berdasarkan Waktu Lokal (Dashboard)
const greetingText = document.getElementById("greetingText");
if (greetingText) {
    const jam = new Date().getHours();
    let waktu = "Pagi";
    if (jam >= 11 && jam < 15) {
        waktu = "Siang";
    } else if (jam >= 15 && jam < 18) {
        waktu = "Sore";
    } else if (jam >= 18) {
        waktu = "Malam";
    }
    
    // Ambil nama dari localStorage jika ada, fallback ke Pengguna
    const namaAktif = localStorage.getItem("namaUser") || "Pengguna";
    greetingText.innerText = `Selamat ${waktu}, ${namaAktif}!`;
}

// 3. Render & Tambah Stok Buku (stok.html - Menggunakan dataKatalogBuku)
const tabelStokBody = document.getElementById("tabelStokBody");
function renderTabelStok() {
    if (!tabelStokBody) return;
    tabelStokBody.innerHTML = "";
    
    dataKatalogBuku.forEach((buku, index) => {
        let row = `<tr>
            <td>${buku.kodeBarang}</td>
            <td><img src="${buku.cover}" alt="cover" width="40" style="vertical-align: middle; margin-right: 8px;"> ${buku.namaBarang}</td>
            <td>${buku.jenisBarang} (Edisi ${buku.edisi})</td>
            <td>${buku.harga}</td>
            <td>${buku.stok}</td>
            <td><button onclick="hapusStok(${index})" class="btn-danger">Hapus</button></td>
        </tr>`;
        tabelStokBody.innerHTML += row;
    });
}

const formTambahStok = document.getElementById("formTambahStok");
if (formTambahStok) {
    renderTabelStok();
    formTambahStok.addEventListener("submit", function(e) {
        e.preventDefault();
        const kodeBarang = document.getElementById("kodeBarang").value;
        const namaBarang = document.getElementById("namaBarang").value;
        const jenisBarang = document.getElementById("jenisBarang").value;
        const edisi = document.getElementById("edisiBarang").value;
        const stok = parseInt(document.getElementById("stokBarang").value);
        const harga = "Rp " + parseInt(document.getElementById("hargaBarang").value).toLocaleString();

        const bukuBaru = {
            kodeBarang,
            namaBarang,
            jenisBarang,
            edisi,
            stok,
            harga,
            cover: "img/newbook.jpg"
        };

        dataKatalogBuku.push(bukuBaru);
        renderTabelStok();
        formTambahStok.reset();
        alert("Stok/Katalog buku berhasil ditambahkan!");
    });
}

function hapusStok(index) {
    dataKatalogBuku.splice(index, 1);
    renderTabelStok();
}

// 4. Halaman Pemesanan (checkout.html - Menggunakan dataKatalogBuku)
const pilihanBuku = document.getElementById("pilihanBuku");
if (pilihanBuku) {
    dataKatalogBuku.forEach(buku => {
        let opt = document.createElement("option");
        opt.value = buku.kodeBarang;
        opt.textContent = `${buku.namaBarang} (${buku.harga})`;
        pilihanBuku.appendChild(opt);
    });

    const formCheckout = document.getElementById("formCheckout");
    formCheckout.addEventListener("submit", function(e) {
        e.preventDefault();
        const nama = document.getElementById("namaPemesan").value;
        const alamat = document.getElementById("alamatPemesan").value;
        const kodeBarang = pilihanBuku.value;
        const jumlah = parseInt(document.getElementById("jumlahPesan").value);

        const selectedBuku = dataKatalogBuku.find(b => b.kodeBarang === kodeBarang);
        // Membersihkan string harga dari "Rp " dan titik untuk kalkulasi matematika
        const hargaAngka = parseInt(selectedBuku.harga.replace("Rp ", "").replace(/\./g, ""));
        const totalHarga = hargaAngka * jumlah;

        document.getElementById("resNama").innerText = nama;
        document.getElementById("resAlamat").innerText = alamat;
        document.getElementById("resBuku").innerText = `${selectedBuku.namaBarang} (${jumlah} pcs)`;
        document.getElementById("resTotal").innerText = `Rp ${totalHarga.toLocaleString()}`;

        document.getElementById("ringkasanPesanan").style.display = "block";
    });
}

// 5. Tracking Pengiriman (tracking.html - Menggunakan dataTracking)
function cariPengiriman() {
    const noDO = document.getElementById("inputNoDO").value.trim();
    const hasilDiv = document.getElementById("hasilTracking");

    if (dataTracking[noDO]) {
        let data = dataTracking[noDO];
        document.getElementById("trkNomorDO").innerText = data.nomorDO;
        document.getElementById("trkNama").innerText = data.nama;
        document.getElementById("trkStatus").innerText = data.status;
        document.getElementById("trkEkspedisi").innerText = data.ekspedisi;
        document.getElementById("trkTanggal").innerText = data.tanggalKirim;
        document.getElementById("trkPaket").innerText = data.paket;
        document.getElementById("trkTotal").innerText = data.total;

        // Render detail riwayat perjalanan (timeline)
        let timelineHtml = "<ul>";
        data.perjalanan.forEach(item => {
            timelineHtml += `<li><strong>[${item.waktu}]</strong> - ${item.keterangan}</li>`;
        });
        timelineHtml += "</ul>";
        document.getElementById("trkPerjalanan").innerHTML = timelineHtml;

        hasilDiv.style.display = "block";
    } else {
        alert("Nomor Delivery Order tidak ditemukan! Coba gunakan: 20230012 atau 20230013");
        hasilDiv.style.display = "none";
    }
}
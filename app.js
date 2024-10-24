// app.js

// Fungsi untuk registrasi
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    if (newUsername && newPassword) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Cek apakah username sudah terdaftar
        if (users.some(user => user.username === newUsername)) {
            alert("Username sudah terdaftar!");
        } else {
            // Tambahkan pengguna baru
            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "index.html";
        }
    }
});

// Fungsi untuk login
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Cek apakah username dan password sesuai
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login berhasil!");
        // Lakukan tindakan setelah login, misalnya redirect ke halaman lain
    } else {
        alert("Username atau password salah!");
    }
});

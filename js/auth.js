// Simpan admin credentials (dalam produksi, ini harus lebih aman)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// Cek jika user sudah login
function checkAuth() {
    return localStorage.getItem('authenticated') === 'true';
}

// Fungsi login
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_USER && password === ADMIN_PASS) {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'upload.html';
    } else {
        alert('Username atau password salah!');
    }
});

// Fungsi logout
document.getElementById('logout-btn')?.addEventListener('click', function() {
    localStorage.removeItem('authenticated');
    window.location.href = '../index.html';
});

// Proteksi halaman admin
if (window.location.pathname.includes('/admin/upload.html') && !checkAuth()) {
    window.location.href = 'login.html';
}
// Database file (simulasi dengan file.txt)
const DB_FILE = '../database/files.txt';

// Fungsi untuk memuat file dari database
async function loadFiles() {
    try {
        const response = await fetch(DB_FILE);
        const data = await response.text();
        
        if (!data) return [];
        
        return data.split('\n')
            .filter(line => line.trim() !== '')
            .map(line => {
                const [filename, description, timestamp] = line.split('|');
                return { filename, description, timestamp };
            });
    } catch (error) {
        console.error('Error loading files:', error);
        return [];
    }
}

// Fungsi untuk menambahkan file ke database
async function addFileToDB(filename, description) {
    const timestamp = new Date().toISOString();
    const fileEntry = `${filename}|${description}|${timestamp}\n`;
    
    try {
        // Dalam implementasi nyata, ini akan memerlukan backend
        // Karena GitHub Pages hanya mendukung konten statis,
        // kita akan menyimpan di localStorage sebagai solusi sementara
        const existingFiles = await loadFiles();
        existingFiles.push({ filename, description, timestamp });
        localStorage.setItem('fileDB', JSON.stringify(existingFiles));
        
        // Simulasi: tambahkan ke daftar yang terlihat
        displayFiles(existingFiles, true);
        return true;
    } catch (error) {
        console.error('Error adding file:', error);
        return false;
    }
}

// Fungsi untuk menampilkan file
async function displayFiles(files = null, isAdmin = false) {
    const containerId = isAdmin ? 'admin-files-container' : 'files-container';
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    if (!files) {
        files = await loadFiles();
    }
    
    container.innerHTML = '';
    
    if (files.length === 0) {
        container.innerHTML = '<p>Tidak ada file yang tersedia.</p>';
        return;
    }
    
    files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-card';
        
        fileCard.innerHTML = `
            <h3>${file.filename}</h3>
            <p>${file.description || 'Tidak ada deskripsi'}</p>
            <p><small>Diupload: ${new Date(file.timestamp).toLocaleString()}</small></p>
            <a href="../uploads/${file.filename}" class="download-btn" download>Download</a>
            ${isAdmin ? `<button class="delete-btn" data-filename="${file.filename}">Hapus</button>` : ''}
        `;
        
        container.appendChild(fileCard);
    });
    
    // Tambahkan event listener untuk tombol hapus (jika admin)
    if (isAdmin) {
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async function() {
                const filename = this.getAttribute('data-filename');
                if (confirm(`Apakah Anda yakin ingin menghapus ${filename}?`)) {
                    // Dalam implementasi nyata, ini akan menghapus dari database
                    const files = await loadFiles();
                    const updatedFiles = files.filter(f => f.filename !== filename);
                    localStorage.setItem('fileDB', JSON.stringify(updatedFiles));
                    displayFiles(updatedFiles, true);
                }
            });
        });
    }
}

// Fungsi untuk menangani upload file
document.getElementById('upload-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('file');
    const description = document.getElementById('description').value;
    
    if (fileInput.files.length === 0) {
        alert('Silakan pilih file terlebih dahulu!');
        return;
    }
    
    const file = fileInput.files[0];
    const filename = file.name;
    
    // Dalam implementasi nyata, file akan diupload ke server
    // Di sini kita hanya mensimulasikan dengan localStorage
    const success = await addFileToDB(filename, description);
    
    if (success) {
        alert('File berhasil diupload!');
        document.getElementById('upload-form').reset();
    } else {
        alert('Gagal mengupload file. Silakan coba lagi.');
    }
});

// Muat file saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cek jika kita berada di halaman admin
    const isAdminPage = window.location.pathname.includes('/admin/upload.html');
    
    if (isAdminPage && !checkAuth()) {
        window.location.href = 'login.html';
        return;
    }
    
    displayFiles(null, isAdminPage);
});
// Fungsi untuk memuat file dari database
async function loadFiles() {
    try {
        const response = await fetch('database/files.txt');
        if (!response.ok) {
            throw new Error('File database tidak ditemukan');
        }
        const data = await response.text();
        
        return data.split('\n')
            .filter(filename => filename.trim() !== '')
            .map(filename => ({
                filename: filename.trim(),
                downloadUrl: `uploads/${filename.trim()}`
            }));
    } catch (error) {
        console.error('Error loading files:', error);
        return [];
    }
}

// Fungsi untuk menampilkan file di halaman utama
async function displayFiles() {
    const filesContainer = document.getElementById('files-container');
    if (!filesContainer) return;
    
    const files = await loadFiles();
    
    filesContainer.innerHTML = '';
    
    if (files.length === 0) {
        filesContainer.innerHTML = '<p>Tidak ada file yang tersedia.</p>';
        return;
    }
    
    files.forEach(file => {
        const fileElement = document.createElement('div');
        fileElement.className = 'file-item';
        fileElement.innerHTML = `
            <h3>${file.filename}</h3>
            <a href="${file.downloadUrl}" class="download-btn" download>Download</a>
        `;
        filesContainer.appendChild(fileElement);
    });
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    displayFiles();
    
    // Tambahkan event listener untuk logout jika ada
    document.getElementById('logout-btn')?.addEventListener('click', function() {
        localStorage.removeItem('authenticated');
        window.location.href = '../index.html';
    });
});
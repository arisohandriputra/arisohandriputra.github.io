<?php
// Mapping antara ID/token dan file
$files = [
    '33e8' => 'arixsetup_x86_64.zip',
    '1b25' => 'Batch_Image_Resizer_x86_64.zip',
    'b94f' => 'CelareChat_x86_64.zip',
	'4275' => 'MyQRManager_x86_64.zip',
	'47a3' => 'OneClick Cleaner_x86_64.zip',
	'1093' => 'ShowPublic_IP_x86_64.zip',
	'2cb3' => 'SoundTag_x86_64.zip',
	'2883' => 'uDiscMounter_x86_64.zip',
];

// Folder tempat file disimpan
$folder = __DIR__ . '/software/';

// Ambil ID dari parameter URL
$id = $_GET['id'] ?? null;

// Validasi ID
if ($id && isset($files[$id])) {
    // Ambil nama file berdasarkan ID
    $fileName = $files[$id];
    $filePath = $folder . basename($fileName);

    // Periksa apakah file ada
    if (file_exists($filePath)) {
        // Header untuk memulai unduhan
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
        header('Content-Length: ' . filesize($filePath));

        // Kirim file ke browser
        readfile($filePath);
        exit;
    } else {
        http_response_code(404);
        echo 'File tidak ditemukan!';
        exit;
    }
} else {
    http_response_code(400);
    echo 'ID tidak valid!';
    exit;
}
?>
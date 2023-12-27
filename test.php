<!DOCTYPE html>
<html>
<head>
    <title>PDF QR Code Reader</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js"></script>
</head>
<body>
    <input type="file" id="fileInput" accept=".pdf">
    <button onclick="processPDF()">Process PDF</button>
    <div id="qrCodeContent"></div>

	<?php
$content = file_get_contents('/home/uzdz2a8p58ks/js/test.js');
echo $content;
?>

</body>
</html>
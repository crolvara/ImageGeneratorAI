<?php
if(isset($_POST['imgsrc'])){
    $imgBase64Data = $_POST['imgsrc'];
    $imgData = base64_decode($imgBase64Data);
    $fileName = 'generated_image.jpg'; // set the filename here
    file_put_contents($fileName, $imgData);
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . $fileName);
    readfile($fileName);
}
?>







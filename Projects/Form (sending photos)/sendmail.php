<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail ->CharSet = 'UTF-8';
$mail ->setLanguage('ru', 'phpmailer/language/');
$mail ->IsHTML(true);

$mail ->setFrom('123@123.ru', 'loh po jizni');
$mail ->addAddress('321@321.ru');
$mail ->Subject = 'Privet! Eto';

$hand = 'Right';
if($_POST['hand'] == 'left') {
    $hand = 'Left';
}

$body = '<h1>Hello eto super pismo</h1>';

if(trim(!empty($_POST['name']))) {
    $body.='<p><strong>Name:</strong>'.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong>'.$_POST['email'].'</p>';
}

if (!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];

    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $fileAttach = $filePath;
        $body.='<p><strong>Photo v prilojenii</strong></p>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Data was send';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
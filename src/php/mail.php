<?php
function clean($value = "") {
	$value = trim($value);
	$value = stripslashes($value);
	$value = strip_tags($value);
	$value = htmlspecialchars($value);
	return $value;
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$message = clean($_POST['userMessage']);
	$mailFrom = $_POST['userEmail'];
	$subject = "my Portfolio";
	$to = "nik.152002@mail.ru";
	$headers = "From: visiter of my portfolio <" + $mailFrom + ">\r\nContent-type: text/html; charset=windows-1251 \r\n";
	mail($to,$subject,$message,$headers);
	mail("nik.152002@mail.ru","header","text");	
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		body{
			text-align: center;
			background: #1F1F20;
			color: #fff;
			font-size: 1.5rem;
			font-family: sans-serif;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		h1{
			text-shadow: 5px 5px 10px #000;
		}
	</style>
</head>
<body>
	<h1>
	<?php
$to     = 'nik.152002@mail.ru';
$subject = "Рад видеть вас на своём сайте!";
$message = $_POST["userMessage"];
$email = $_POST["userEmail"];
$headers = array(
    'From' => 'nik.152002@mail.ru',
);

if(mail($to, $subject, $message, $headers)) echo "Письмо было отправлено!";
else echo "Не удалось отправить письмо! Проверьте соединение с Интернетом!";
?>
	</h1>
</body>
</html>
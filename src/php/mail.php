<?php
function clean($value = "") {
	$value = trim($value);
	$value = stripslashes($value);
	$value = strip_tags($value);
	$value = htmlspecialchars($value);
	return $value;
}

// function check_length($value = "", $min, $max) {
// 	$result = (mb_strlen($value) < $min || mb_strlen($value) > $max);
// 	return !$result;
// }

if($_SERVER['REQUEST_METHOD'] == 'POST') {
	$message = clean($_POST['userMessage']);
	$mailFrom = $_POST['userEmail'];
	$subject = "my Portfolio";
	$to = "nik.152002@mail.ru";
	$headers = "From: visiter of my portfolio <" + $mailFrom + ">\r\nContent-type: text/html; charset=windows-1251 \r\n";
	// $headers = "From: MyRusakov.ru <abc@gmail.com>\r\nContent-type: text/html; charset=windows-1251 \r\n";
	mail($to,$subject,$message,$headers);
}
?>
<?php
	header('Content-type: application/json');
	
    $status = array(
		'type'=>'success',
		'message'=>'Сообщение отправлено!'
	);

    $name = @trim(stripslashes($_POST['name2'])); 
    $email = @trim(stripslashes($_POST['email2'])); 
    $phone = @trim(stripslashes($_POST['phone2'])); 
    $message = @trim(stripslashes($_POST['message2'])); 

    $email_from = 'post@teethwhitening.in.ua';
    $email_to = '';

    $body = 'Имя: ' . $name . "\n\n" . 'Email: ' . $email . "\n\n" . 'Номер телефона: ' . $phone . "\n\n" . 'Сообщение: ' . $message;

    $success = @mail($email_to, $phone, $body, 'From: <'.$email_from.'>');

    echo json_encode($status);
    die;
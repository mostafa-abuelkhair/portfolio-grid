<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '../utils/PHPMailer/src/Exception.php';
require '../utils/PHPMailer/src/PHPMailer.php';
require '../utils/PHPMailer/src/SMTP.php';



function sendMessage() {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data["name"];
    $email= $data["email"];
    $subject = $data["subject"];
    $body = $data["message"];

    // send email
    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'example@gmail.com';                     //SMTP username
        $mail->Password   = 'secret';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom($email, 'Mailer');
        $mail->addAddress('example@gmail.com');     //Add a recipient
        $mail->addReplyTo($email, 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        //$mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = "Message from $email at abuelkhair.info \r\n \r\n".$body;
        //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo json_encode(
            array("message"=>"Thanx for your message, i will reply you on your email soon")
        );
    } catch (Exception $e) {
        echo json_encode( 
            array("error"=>"Message could not be sent. Mailer Error: {$mail->ErrorInfo}")
        );
    }

    
}

?>
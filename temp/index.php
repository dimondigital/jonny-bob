<?php
	// объявляем константу содержащую путь до файлов языков
	define('LANGUAGE_DIR', $SERVER['DOCUMENT_ROOT']."/language/", false);
	// тоже, путь до шаблона
	define('TEMPLATE_DIR', $SERVER['DOCUMENT_ROOT']."/template/", false);

	// получаем переменную языка
	$language = $_GET['lang'];
	$language = 'ru';
	// не обязательно получать переменную гет-ом. 
	// можно брать её откуда угодно, например - из базы данных, или из сессии

	// загружаем файл перевода
	include_once(LANGUAGE_DIR . $language . '.php');

	// загружаем файл шаблона, начинаем вывод
	include_once(TEMPLATE_DIR . 'default.php');
?>
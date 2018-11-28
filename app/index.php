<!DOCTYPE html>
<html lang="ru">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Геометрия дизайна</title>
	<link rel="stylesheet" href="css/libs.css" />
	<link rel="stylesheet" href="css/main.css" />
	<script src="js/libs.min.js"></script>
	<script src="js/main.js"></script>
	<!-- Code by Andrey Strebkov -->
</head>
<body>
	<div id="container">
		<div id="block-main">
			<div id="block-main-top">
				<div id="logo">ГеометрияДизайна</div>
				<ul>
					<a id="menu-portfolio">ПОРТФОЛИО</a>
					<a id="menu-price">ЦЕНЫ</a>
					<a id="menu-contact">КОНТАКТЫ</a>
				</ul>
				<div class="contact">8 921 979-34-25</div>
			</div>
			<div id="block-main-description">
				<h1>Мы — творческое объединение <span>дизайнеров интерьера</span><br> домов, квартир, общественных помещений.</h1>
				<h3>Работаем в городе <span>Санкт-Петербург</span> и <span>Ленинградской области.</span></h3>
			</div>
			<img id="arrow" src="img/arrow.png">
		</div>
		<div id="block-portfolio">
			<h1>Наши работы</h1>
			<ul class="popup-gallery owl-carousel">
				<?php for ($i=0; $i < 56; $i++) { 
					echo "<a href='img/gallery/".$i.".jpg'><img src='img/gallery/".$i.".jpg'></a>";
				}?>
			</ul>
		</div>
		<div id="block-price">
			<h1>Наши расценки</h1>
				<ul>
					<li></li>
					<li><h3 class="orange">1000 <span>р./кв.м.</span></h3></li>
					<li class="space"></li>
					<li><h3 class="green">1500 <span>р./кв.м.</span></h3></li>
				</ul>			<ul>
					<li>Обмерный план</li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>План демонтажа и монтажа </li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>План расстановки мебели и внутреннего оборудования с габаритами и размерами</li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>План по электрике относительно расстановки мебели </li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>План полов и потолков</li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>Развертка стен </li>
					<li><img src="img/tick.png"></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li>Ведение объекта (авторский надзор)</li>
					<li></li>
					<li class="space"></li>
					<li><img src="img/tick.png"></li>
				</ul>			<ul>
					<li></li>
					<li></li>
					<li class="space"></li>
					<li></li>
				</ul>			<ul>
					<li><h3>Визуализация проекта <span>(одно помещение)</span></h3></li>
					<li></li>
					<li class="space"></li>
					<li><h3 class="blue">2500 р.</h3></li>
				</ul>
		</div>
		<div id="block-order">
			<form name="order" action="" method="post">
				<h1>У вас есть вопросы?</h1>				
				<p>Оставьте заявку и мы с Вами свяжемся</p>
				<input type="text" name="name" size="40" placeholder="Ваше имя" required>
				<input type="phone" name="phone" size="40" placeholder="Телефон">
				<input type="email" name="email" size="40" placeholder="Электронная почта">
				<input id="submit" type="submit" name="send" value="Отправить заявку">
			</form>
		</div>
		<div id="block-contact">
			<div class="contact">8 921 979-34-25</div>
			<div id="email">geometriadizaina@mail.ru</div>
			<p>2018 «Геометрия Дизайна». Все права защищены.</p>
		</div>
	</div>
</body>
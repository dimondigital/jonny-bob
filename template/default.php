<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>JONNY BOB</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
	<div class="wrapper">
	<div class="logo nav-item" data-href="/"></div>

		<div class="blend-figure main-figure-1"></div>
		<div class="blend-figure main-figure-2"></div>
		<div class="blend-figure who-we-figure-1"></div>
		<div class="blend-figure who-we-figure-2"></div>
		<div class="blend-figure we-done-figure-1"></div>
		<div class="blend-figure we-done-figure-2"></div>
		
		<!-- leave request form -->
		<div class="form-wrapper">	
			<form  id="call-form" class="callbackform" method="post"> 
	            <input type="hidden" name="act" value="callback" hidden>
	            <label for="name"><?=WHAT_IS_YOUR_NAME?></label>            
	            <input id="name" name="name" required="required" placeholder="">
	            <label for="subject">Тема письма</label>
	            <input id="subject" name="subject" required="required" placeholder="">
	            <label for="message">Сообщение</label>
	            <textarea name="message" id="message" cols="20" rows="4"></textarea>
	            <input class="form-close" type="submit" value="отправить письмо"/>
	        </form>		
        </div>

        <!-- who we are -->
        <div class="text-wrapper">
        <div class="who-we-text">
        <p>Мы - молодая студия дизайна
        и веб-разработки.</p>
        
        <p class='underline'>Чем мы занимаемся ?</p>
        
        <p>Поиск новых вариантов помощи людям в достижении их целей.</p>
        <p>Раскрытие индивидуальности и уникальности.</p>
        
        <p>Переосмысление и дополнение существующего. А также отсекание лишнего.</p>

        <p>Привлечение клиентов.</p>
        
        <p class='underline'>А конкретнее ?</p>
        
        <p>Фактически мы находимся на пересечении четырёх ключевых направлений:</p>
        
        <p>Разработка сайтов</p>
        
        <p>Дизайн</p>
        
        <p>Реклама</p>
        
        <p>Маркетинг</p>
        
        </div>

        </div>

        <!-- we can -->
        <div class="text-wrapper-we-can">
        	<div class="we-can-text">
        		<p class="underline">Разработка</p>
        		<p>- Landing Page (продающая страница) -</p>
        		<p>- Сайт-визитка -</p>
        		<p>- Живой, анимационный сайт -</p>
        		<p>- Интернет-магазин -</p>
        		<p>- Мобильное приложение -</p>
        		<p>- Компьютерная игра -</p>
        		<p>- Одностраничное веб-приложение -</p>
        		<p>- Посадка сайта на CMS (Joomla, Drupal, Wordpress) -</p>
        		<p class="underline">Дизайн</p>
        		<p>- Логотип -</p>
        		<p>- Визитка -</p>
        		<p>- Иллюстрации -</p>
        		<p>- Фирменный стиль -</p>
        		<p>- Маркетинг-кит -</p>
        		<p>- Бренд бук -</p>
        		<p class="underline">Реклама</p>
        		<p>- Подключение и настройка контекстной рекламы (Google Adwords, Яндекс.Директ). Клиенты из поисковиков "под ключ" -</p>
        		<p class="underline">Маркетинг</p>
        		<p>- Привлечение клиентов из соц. сетей (SMM) -</p>
        	</div>
        </div>

		<!-- portfolio -->
		<div class="portfolio">
			<div class="portfolio-button button-left"></div>
			<div class="portfolio-button button-right"></div>

			<div class="items">
				<div class="portfolio-item current-item" data-index='0'>				
					<div class="text-wrapper-we-done">
					<div class="item-preview item-preview-1"></div>					
						<div class="we-done-text">
							<p>Разработка Landing Page</p>
							<div class="button"><a href="http://www.швец.dp.ua" target="_blank">посмотреть сайт</a></div>
							<p>Тема: Юриспруденция</p>
							<p>Учитывая серьёзность тематики, было принято решение создать достаточно консервативный дизайн.</p>
							<p>Основными цветами стали два - белый и чёрный, подчёркивающие основную дуальность нашего мира - деление на добро и зло.</p>
							<p>Деятельность в сфере юриспруденции по сути является взвешиванием и того и другого на чашах весов справедливости.</p>
							<p>Что мы и постарались подчеркнуть в дизайне.</p>
						</div>
					</div>
				</div>
				
				<div class="portfolio-item hidden" data-index='1'>
					<div class="text-wrapper-we-done">
					<div class="item-preview item-preview-2"></div>					
						<div class="we-done-text">
							<p>Разработка Landing Page</p>
							<div class="button"><a href="http://www.premiumpack.dp.ua" target="_blank">посмотреть сайт</a></div>
							<p>Тема: Полиэтиленовая упаковка</p>
							<p>В короткие сроки (1 неделя) был разработан сайт, цель которого не информировать пользователя на все 100% о предприятии-производителе, но заинтересовать и предложить заявку на подсчёт, что является ключевым действием в этой области для успешной сделки.</p>
							<p>Рублёные шрифты и ритмичность анимации подчеркнули технологичность компании.</p>	
						</div>
					</div>
				</div>

				<div class="portfolio-item hidden" data-index='2'>
					<div class="text-wrapper-we-done">
					<div class="item-preview item-preview-3"></div>					
						<div class="we-done-text">
							<p>Разработка Landing Page</p>
							<div class="button"><a href="http://www.okna.green-day.com.ua" target="_blank">посмотреть сайт</a></div>
							<p>Тема: Деревянные окна</p>
							<p>Высокая конкуренция данного продукта с металлопластиковыми окнами продиктовала нам необходимость вникнуть и наглядно показать все преимущества дерева над пластиком.</p>
							<p>По всем параметрам кроме цены, деревянные окна оказались вне конкуренции.</p>								
						</div>
					</div>
				</div>

				<div class="portfolio-item hidden" data-index='3'>
					<div class="text-wrapper-we-done">
					<div class="item-preview item-preview-4"></div>					
						<div class="we-done-text">
							<p>Разработка Landing Page</p>
							<div class="button"><a href="http://www.teplo.green-day.com.ua" target="_blank">посмотреть сайт</a></div>
							<p>Тема: Электроотопление</p>
							<p>"Радуйтесь теплу" - именно так мы решили выразить основную идею продукта.</p>
							<p>Следуя концепции простоты и лаконичности, мы достали и оформили все основные преимущества данного продукта - экономичность, безопасность и регулируемость уровня тепла.</p>
							<p>Предоставив доступ к каталогу продукции и предложив бесплатный подсчёт - мы увеличили лояльность потенциальных клиентов, а значит и количество успешных сделок.</p>								
						</div>
					</div>
				</div>
			</div>

		</div>
		
		<nav>
			<li class="hover-scale who-we-are nav-item" data-href="/who-we-are">
			</li>
			<li class="hover-scale we-can nav-item" data-href="/we-can"></li>
			<li class="hover-scale write-to-us nav-item" data-href="/write-to-us"></li>
			<li class="hover-scale we-done nav-item" data-href="/we-done"></li>
		</nav>
	</div>
	

	<link rel="stylesheet" href="css/starter-style.css">
	<link rel="stylesheet" href="css/fonts.css">
	<link rel="stylesheet" href="css/main-style.css">
	<link rel="stylesheet" href="css/mobile.css">
	<script src="bower_components/gsap/src/minified/TimelineLite.min.js"></script>
	<script src="bower_components/gsap/src/minified/TweenMax.min.js"></script>
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="js/main.js"></script>

	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-100612892-1', 'auto');
	  ga('send', 'pageview');

	</script>
</body>
</html>
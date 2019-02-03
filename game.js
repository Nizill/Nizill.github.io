var pjs = new PointJS('2D', 500, 800);
// pjs.system.consoleLog(true);

pjs.system.initFullPage();

var log = pjs.system.log;
var game = pjs.game;
var point = pjs.vector.point;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;

// для добавления меню достаточно просто создать игровой цикл, передав конструктору два параметра:
// первый - экземпляр движка
// второй - объект, содержащий свойства, как указано в примере
// объект items содержит пункты меню в формате "название игрового цикла : надпись на пункте меню"

game.newLoopFromClassObject('menu', new Menu(pjs, {
	name  : 'Проект Клана (CSS:SURF)',
	author : 'Клан (CSS:SURF)',
	radius : 15,
	items : {
		game  : 'Скачать игру Counter-Strike: Source v34 бесплатно',
		about : 'Об игре',
		gameLoop1 : 'Сайт проекта от клана (CSS:SURF)',
		gameLoop2 : 'Наша группа VK',
		gameLoopX : 'Купить привилегии на проекте',
	}
}));


game.startLoop('menu');



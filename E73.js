const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeRect(10, 20, 30, 40);

ctx.strokeStyle = "yellow"; // Цвет границ прямоугольника
ctx.strokeRect(60, 20, 30, 40); // Метод отрисовки полого прямоугольника

ctx.fillStyle = "green"; // Цвет залитого прямоугольника
ctx.fillRect(120, 10, 50, 50); // Метод отрисовки залитого прямоугольника


ctx.beginPath(); // Создаёт новый контур
ctx.moveTo(75,150); // Перемещает перо в точку с координатами x и y
ctx.lineTo(100,175); // Рисует линию с текущей позиции до позиции, определённой x и y
ctx.lineTo(100,125);
ctx.fillStyle = "green"; // Заливаем выбранным цветом фигуру
ctx.fill(); // Рисует фигуру с заливкой внутренней области.
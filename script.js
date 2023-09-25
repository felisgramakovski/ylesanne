let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 20);

ctx.fillStyle = 'black';
ctx.fillRect(10, 30, 100, 20);

ctx.strokeStyle = 'black';
ctx.strokeRect(11, 50, 98, 19);

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(225, 10);
ctx.lineTo(250, 60);
ctx.lineTo(200, 30);
ctx.lineTo(255, 30);
ctx.lineTo(215, 60);
ctx.lineTo(225, 10);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
        ctx.lineWidth=1;
        ctx.strokeStyle= 'black';
        ctx.arc(200, 200, 30, 0, Math.PI/180*360);
        ctx.stroke();

ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(210, 160); ctx.lineTo(190, 160);
    ctx.lineTo(200, 200);
    ctx.fill();

ctx.beginPath();
    ctx.lineWidth = 19;
    ctx.strokeStyle = 'white';
    ctx.arc(200, 200, 40, 0, Math.PI/100*360);
    ctx.closePath();
    ctx.stroke();

 

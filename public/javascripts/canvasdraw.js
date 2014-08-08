var ctx;
var canvas_draw = function(o){
    ctx = document.getElementById(o).getContext('2d');
    this.lastX = 0; this.lastY = 0;
    this.mousePressed = false;
}

canvas_draw.prototype.draw = function(data){
    //console.log(data);
    if(data.isPress){
        ctx.beginPath();
        ctx.strokeStyle = data.color;
        ctx.lineWidth = data.width;
        ctx.lineJoin = 'round';
        ctx.moveTo(canvas_draw.lastX, canvas_draw.lastY);
        ctx.lineTo(data.x, data.y);
        ctx.closePath();
        ctx.stroke();
    }
    canvas_draw.lastX = data.x;
    canvas_draw.lastY = data.y;
}

canvas_draw.prototype.clear = function(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
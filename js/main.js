var img;
var cvs;
var ctx;
const size = 320;
const th = 400;
const name = 'from Master76';
const text = ' My Greetings.';

window.onload = function () {
    init();

    img = new Image();
    img.src = 'res/github.svg';
    img.onload = draw;
}

window.onresize = function () {
    cvs.width = window.innerWidth - 10;
    cvs.height = window.innerHeight - 10;
    draw();
}

function init() {
    cvs = document.getElementById('cvs');
    ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth - 10;
    cvs.height = window.innerHeight - 10;
}

function draw() {
    var metrics;
    var w = cvs.width;
    var h = cvs.height;
    var sx = getStartPixel(w, size);
    var sy = getStartPixel(h, th) - 40;
    ctx.drawImage(img, sx, sy, size, size);

    ctx.font = '24px Consolas';
    metrics = ctx.measureText(text);
    sx = getStartPixel(w, metrics.width);
    sy += size + 20;
    ctx.fillText(text, sx, sy);

    ctx.font = '12px Consolas';
    metrics = ctx.measureText(name);
    sx = getStartPixel(w, metrics.width);
    sy += 40;
    ctx.fillText(name, sx, sy);
}

function getStartPixel(scope, item, offset) {
    var rtn = (scope - item) / 2;
    if (offset)
        rtn += offset;
    return rtn;
}

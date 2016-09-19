var cvs;
var ctx;
const size = 320;
const th = 400;
const name = 'from Master76';
const text = ' My Greetings.';
var lastVec = { x: 0, y: 0 };

const tick = 25;

window.onload = function () {
    init();
    setInterval(draw, tick);
}

window.onresize = function () {
    cvs.width = window.innerWidth - 10;
    cvs.height = window.innerHeight - 10;
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

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.save();

    ctx.translate(sx, sy);
    ctx.scale(size / 1792, size / 1792);

    ctx.beginPath();
    M(1664, 896);
    q(0, 251, -146.5, 451.5);
    t(-378.5, 277.5);
    q(-27, 5, -39.5, -7);
    t(-12.5, -30);
    v(-211);
    q(0, -97, -52, -142);
    q(57, -6, 102.5, -18);
    t(94, -39);
    t(81, -66.5);
    t(53, -105);
    t(20.5, -150.5);
    q(0, -121, -79, -206);
    q(37, -91, -8, -204);
    q(-28, -9, -81, 11);
    t(-92, 44);
    l(-38, 24);
    q(-93, -26, -192, -26);
    t(-192, 26);
    q(-16, -11, -42.5, -27);
    t(-83.5, -38.5);
    t(-86, -13.5);
    q(-44, 113, -7, 204);
    q(-79, 85, -79, 206);
    q(0, 85, 20.5, 150);
    t(52.5, 105);
    t(80.5, 67);
    t(94, 39);
    t(102.5, 18);
    q(-40, 36, -49, 103);
    q(-21, 10, -45, 15);
    t(-57, 5);
    t(-65.5, -21.5);
    t(-55.5, -62.5);
    q(-19, -32, -48.5, -52);
    t(-49.5, -24);
    l(-20, -3);
    q(-21, 0, -29, 4.5);
    t(-5, 11.5);
    t(9, 14);
    t(13, 12);
    l(7, 5);
    q(22, 10, 43.5, 38);
    t(31.5, 51);
    l(10, 23);
    q(13, 38, 44, 61.5);
    t(67, 30);
    t(69.5, 7);
    t(55.5, -3.5);
    l(23, -4);
    q(0, 38, 0.5, 89);
    t(0.5, 54);
    q(0, 18, -13, 30);
    t(-40, 7);
    q(-232, -77, -378.5, -277.5);
    t(-146.5, -451.5);
    q(0, -209, 103, -385.5);
    t(279.5, -279.5);
    t(385.5, -103);
    t(385.5, 103);
    t(279.5, 279.5);
    t(103, 385.5);
    Z();
    ctx.restore();

    ctx.save();
    ctx.translate(sx, sy);
    ctx.scale(size / 1792, size / 1792);

    var gradient = ctx.createLinearGradient(0, 0, 1792, 1792);
    gradient.addColorStop("0.2", "red");
    gradient.addColorStop("0.5", "black");
    gradient.addColorStop("0.8", "blue");
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.font = '24px Consolas';
    metrics = ctx.measureText(text);
    sx = getStartPixel(w, metrics.width);
    ctx.translate(0, sy + size + 20);
    ctx.fillText(text, sx, 0);

    ctx.font = '12px Consolas';
    metrics = ctx.measureText(name);
    sx = getStartPixel(w, metrics.width);
    ctx.translate(0, 40);
    ctx.fillText(name, sx, 0);

    ctx.restore();
}

function getStartPixel(scope, item, offset) {
    var rtn = (scope - item) / 2;
    if (offset)
        rtn += offset;
    return rtn;
}

function M (x, y) {
    ctx.moveTo(x, y);
    ctx.translate(x, y);
};

function q(x1, y1, x, y) {
    ctx.quadraticCurveTo(x1, y1, x, y);
    ctx.translate(x, y);
    lastVec.x = x - x1;
    lastVec.y = y - y1;
};

function t(x, y) {
    q(lastVec.x, lastVec.y, x, y);
};

function l(x, y) {
    ctx.lineTo(x, y);
    ctx.translate(x, y);
};

function v(y) {
    l(0, y);
};

function Z() {
    ctx.closePath();
};

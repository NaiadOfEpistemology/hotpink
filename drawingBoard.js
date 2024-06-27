
const canvas = document.getElementById('drawingBoard');
const ctx = canvas.getContext('2d');


let ptng = false;
canvas.addEventListener('mouseup', fpstn);
canvas.addEventListener('mousedown', spstn);
canvas.addEventListener('mousemove', draw);


function spstn(e) {
    ptng = true;
    draw(e);
}

function fpstn() {
    ptng = false;
    ctx.startpath();
}

function draw(e) {
    if (!ptng) return;

    
    ctx.lwidth = 5;
    ctx.lcap = 'round';

    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.startpath();
    ctx.moveTo(x, y);
}

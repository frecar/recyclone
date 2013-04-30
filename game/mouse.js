function mydown(e) {

    var x = e.pageX/128 + Math.random()*0.003;
    var y = e.pageY/128;

    if(avaiableBoxes > 0 && x > 2.8 && x < 7.4 ){

        var box = {
            name: 'soppelpose',
            shape: 'square',
            x: x,
            y: y,
            width:0.15,
            height:0.15,
            color:"red",
            image: "gfx/box.png",
            imageStretchToFit:true
        };

        world.createEntity(box);

        avaiableBoxes -=1;

    }
}

world.onRender(function(ctx) {
    ctx.font = "20pt Courier";
    ctx.fillText("Boxes left: " + avaiableBoxes, 1000, 30);
});

function activate_mouse(canvas) {
    canvas.onmousedown = mydown;
}
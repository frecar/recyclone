function mydown(e) {

    var x = e.pageX / 128 + Math.random() * 0.003;
    var y = e.pageY / 128;

    if (avaiableBoxes > 0 && x > 2.8 && x < 7.4) {

        setTimeout(function () {

            var box = world.createEntity({
                name: 'boxbox',
                shape: 'square',
                x: x,
                y: y,
                width: 0.15,
                height: 0.15,
                color: "red",
                image: "gfx/box.png",
                imageStretchToFit: true
            });


            box.onImpact(function (entity, force, friction) {
                if (force > 0.7) {
                    box.destroy();
                }
            });


            avaiableBoxes -= 1;


        }, 250)


    }
}

world.onRender(function (ctx) {

    ctx.font = "20pt Courier";
    ctx.fillText("Points: " + attacks_count, 1010, 30);

    ctx.font = "14pt Courier";
    ctx.fillText("Boxes left: " + avaiableBoxes, 1000, 50);


});

function activate_mouse(canvas) {
    canvas.onmousedown = mydown;
}
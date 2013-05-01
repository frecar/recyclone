function mydown(e) {

    var x = e.pageX / 128 + Math.random() * 0.003;
    var y = e.pageY / 128;

    if (game_running) {

        if (avaiableBoxes > 0 && x > 3.8 && x < 7.4) {

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
}


function activate_mouse(canvas) {
    canvas.onmousedown = mydown;
}
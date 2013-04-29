function mydown(e) {

    var x1 = canvas.offsetLeft + e.pageX;
    var x2 = canvas.offsetLeft + e.pageX;

    var y1 = e.pageY - canvas.offsetTop;
    var y2 = e.pageY - canvas.offsetTop;

    x1 = x1 / 44.8;
    x2 = x2 / 44.8;
    y1 = y1 / 40;
    y2 = y2 / 40;

    x2 += 1;
    y2 += 1;

    console.log(x1, y1, x2, y2);

    var v = world.createEntity(
        {
            type: "static",
            shape: "square",

            /*
             points: [
             {x: 0, y: 0},
             {x: 8, y: 0},
             {x: 8, y: 1},
             {x: 0, y: 1}
             ],
             */

            x: x1,
            y: y1,

            width: 2.5,
            height: 1,
            rotation: [2],
            image: "betongror.png"
            //imageStretchToFit: true

        });

    function start_game() {
        canvas.onmousedown = mydown;
    }


}

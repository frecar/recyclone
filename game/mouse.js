function mydown(e) {

    var x = e.pageX/128;
    var y = e.pageY/128;

    var soppelpose = {
        name: 'soppelpose',
        shape: 'square',
        x: x,
        y: y,
        width: 0.3,
        height: 0.3,
        color:"red",
        image: "gfx/box.png",
        imageStretchToFit: true


    };

    world.createEntity(soppelpose);

}

function activate_mouse(canvas) {
    canvas.onmousedown = mydown;
}
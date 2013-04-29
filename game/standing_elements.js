var squirrel = {
    name: 'ekorn1',
    shape: 'square',
    type: 'dynamic',
    radius: 2,
    x: 24.3,
    y: 8,
    width: 0.8,
    height: 0.8,
    density: 1,
    friction: 1,
    sprite: true,
    image: 'ekorn.png',
    imageStretchToFit: true
}.onImpact(function (entity, normalForce, tangentialForce) {
        if (normalForce > 6) {
            if (entity._name == "soppelpose") {

            }
        }
    });


var standing_platform = {
    name: 'gren_ekorn1',
    type: 'static',
    height: 0.1,
    color: 'white',
    width: .4,
    x: 24.3,
    y: 10.2,
    draw: draw_invisible
};

var truck = {
    name: 'lastebil',
    type: "static",
    image: "lastebil.png",
    imageStretchToFit: true,
    width: 1.5,
    height: 0.7,
    x: 1,
    y: 2
};

var shop = {
    name: 'butikk',
    shape: "square",
    type: "static",
    x: 1,
    y: 12,
    width: 1.5,
    height: 2,
    image: "Butikk.png",
    imageStretchToFit: true
};
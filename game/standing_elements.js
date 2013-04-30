var squirrel = {
    name: 'ekorn1',
    shape: 'square',
    type: 'dynamic',
    radius: 2,
    x: 4,
    y: 3,
    width: 0.2,
    height: 0.2,
    density: 0.1,
    friction: 1,
    sprite: true,
    image: 'gfx/ekorn.png',
    imageStretchToFit: true
};


var standing_platform = {
    name: 'gren_ekorn1',
    type: 'static',
    height: 0.1,
    color: 'white',
    width: .1,
    x: 24.3,
    y: 10.2,
    draw: draw_invisible
};
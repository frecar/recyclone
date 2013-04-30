function build_walls(world) {

    //Wall of heaven
    world.createEntity({name: "wall_heaven", type: "static", color: "red", width: 10, height: 0.01, x: 0, y: 0, draw: draw_invisible});

    //Ground
    world.createEntity({name: "wall_ground", type: "static", color: "red", width: 10, height: 0.1, x: 0, y: 4.2, draw: draw_invisible});

    //Left
    world.createEntity({name: "wall_left", type: "static", color: "red", width: 0.01, height: 5, x: 0, y: 5, draw: draw_invisible});

    //Right
    world.createEntity({name: "wall_right", type: "static", color: "red", width: 0.01, height: 5, x: 10, y: 5, draw: draw_invisible});

    return world;

}
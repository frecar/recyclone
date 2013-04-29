function build_walls(world) {

    //Wall of heaven
    world.createEntity({name: "wall_heaven", type:"static", color:"white", width: 20, x: 0, y: 0});

    /*
    //Wall of ground
    world.createEntity(wallTemplate, {width: 500, x: 3, y: 13.8, draw: draw_invisible});
    //Left wall
    world.createEntity(wallTemplate, {width: 0.1, x: 0, height: 500, y: 5});
    //Right wall
    world.createEntity(wallTemplate, {width: 0.1, x: 32, y: 0, height: 20});
    */

    return world;

}
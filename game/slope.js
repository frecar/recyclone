function build_slope() {


    //Slope part 1
    world.createEntity(
        {
            name: "slope_0",
            shape: "polygon",
            type: "static",
            points: [
                {x: 0.2, y: 1},
                {x: 1.1, y: 4}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            friction: 0
        });


    //Slope part 2
    world.createEntity(
        {
            name: "slope_0",
            shape: "polygon",
            type: "static",
            points: [
                {x: 1, y: 3.8},
                {x: 1.4, y: 4.0}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            friction: 0
        });


    //Slope part 3
    world.createEntity(
        {
            name: "slope_0",
            shape: "polygon",
            type: "static",
            points: [
                {x: 1.4, y: 4.0},
                {x: 2.5, y: 4.2}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            friction: 0
        });

    //Slope part 4
    world.createEntity(
        {
            name: "slope_0",
            shape: "polygon",
            type: "static",
            points: [
                {x: 1.7, y: 4.1},
                {x: 2.6, y: 3.6}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            friction: 0
        });


}
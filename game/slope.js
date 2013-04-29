function build_slope() {

    //Slope part 1
    world.createEntity(
        {
            name: "slope_0",
            shape: "polygon",
            type: "static",
            points: [
                {x: 3, y: 3},
                {x: 4.5, y: 9}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            image: "Butikk.png",
            friction: 0.1
        });


    //Slope part 2
    world.createEntity(
        {
            name: "slope_1",
            shape: "polygon",
            type: "static",
            points: [
                {x: 4.5, y: 9},
                {x: 5.5, y: 11}
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
            name: "slope_2",
            shape: "polygon",
            type: "static",
            points: [
                {x: 5.5, y: 11},
                {x: 6.8, y: 11.4}
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
            name: "slope_3",
            shape: "polygon",
            type: "static",
            points: [
                {x: 6.8, y: 11.4},
                {x: 7.7, y: 11}
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
            name: "slope_4",
            shape: "polygon",
            type: "static",
            points: [
                {x: 7.7, y: 11},
                {x: 8.8, y: 10.2}
            ],
            rotation: 120,
            draw: draw_invisible,

            x: 0,
            y: 0,
            friction: 0
        });

    //Slope part 5
    world.createEntity(
        {
            name: "slope_5",
            shape: "polygon",
            type: "static",
            points: [
                {x: 9, y: 10.2},
                {x: 9, y: 14}
            ],
            rotation: 120,
            draw: draw_invisible,

            x: 0,
            y: 0,
            friction: 0
        });
}
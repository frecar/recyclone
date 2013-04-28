(function () {

    var canvas = document.getElementById('game');
    var world = boxbox.createWorld(canvas, {debugDraw: false, scale: 40});

    function draw_invisible(ctx, x, y) {
        return false;
    }

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

    function add_elements_to_world() {

        var groundTemplate = {
            name: 'ground',
            type: 'static',
            height: 0.1,
            color: 'white'
        };


        //Wall of heaven
        world.createEntity(groundTemplate, {width: 500, x: 0, y: 0});

        //Wall of ground
        world.createEntity(groundTemplate, {width: 500, x: 3, y: 13.8, draw: draw_invisible});

        //Left wall
        world.createEntity(groundTemplate, {width: 0.1, x: 0, height: 500, y: 5});

        //Right wall
        world.createEntity(groundTemplate, {width: 0.1, x: 32, y: 0, height: 20});


        build_slope();


        //Butikk
        world.createEntity(
            {
                name: 'butikk',
                shape: "square",
                type: "static",
                x: 1,
                y: 12,
                width: 1.5,
                height: 2,
                image: "Butikk.png",
                imageStretchToFit: true
            });


        //Lastebil
        world.createEntity(
            {
                name: 'lastebil',
                type: "static",
                image: "lastebil.png",
                imageStretchToFit: true,
                width: 1.5,
                height: 0.7,
                x: 1,
                y: 2
            });


        //Ekorn 1
        world.createEntity({
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

        }).onImpact(function (entity, normalForce, tangentialForce) {
                if (normalForce > 6) {
                    if (entity._name == "soppelpose") {

                    }
                }
            });

        //Gren for ekorn 1
        world.createEntity({
            name: 'gren_ekorn1',

            type: 'static',
            height: 0.1,
            color: 'white',
            width: .4,
            x: 24.3,
            y: 10.2,
            draw: draw_invisible
        });

        //Ekorn 2
        world.createEntity({
            name: 'ekorn2',
            shape: 'square',
            type: 'dynamic',
            radius: 2,
            x: 28.3,
            y: 8,
            width: 0.8,
            height: 0.8,
            density: 1,
            friction: 1,
            sprite: true,
            image: 'ekorn.png',
            imageStretchToFit: true

        }).onImpact(function (entity, normalForce, tangentialForce) {
                if (normalForce > 6) {
                    if (entity._name == "soppelpose") {
                        //setTimeout(this.destroy(),2000);
                    }
                }
            });

        //Gren for ekorn 2
        world.createEntity({
            name: 'gren_ekorn2',

            type: 'static',
            height: 0.1,
            color: 'white',
            width: .4,
            x: 28.3,
            y: 10.2,
            draw: draw_invisible
        });

    }

    function add_moving_elements() {

        function addPoop() {
            var poop = world.createEntity({
                name: 'poop',
                type: 'dynamic',
                x: 13.3,
                y: 10.2,
                image: "poop.png",
                imageStretchToFit: true
            });

            poop.applyImpulse(120, 60);
            poop.onImpact(function (entity, normalForce, tangentialForce) {
                this.destroy();
            })
        }

        //Bæsjekaster
        setTimeout(addPoop, 4200);


        //Søppelpose
        world.createEntity({
            name: 'soppelpose',
            shape: 'circle',
            radius: 0.7,
            x: 4,
            y: 2,
            density: 1,
            friction: 0.2,
            image: 'pose.png',
            imageStretchToFit: true
        }).applyImpulse(150);

    }


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

    }

    function start_game() {
        canvas.onmousedown = mydown;
    }

    function show_instructions() {

        var v = world.createEntity(
            {
                type: "static",
                shape: "square",
                x: 13,
                y: 5,
                width: 2.5,
                height: 1,
                rotation: [2],
                image: "instructions.png"
            });

        function remove_instructions() {
            v.destroy();
            start_game();

        }
        setTimeout(remove_instructions, 8000);
    }

    show_instructions();

    setTimeout(add_elements_to_world, 9000);
    setTimeout(add_moving_elements, 15000);


})();


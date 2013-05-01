(function () {


    build_walls(world);
    build_slope();
    activate_mouse(canvas);


    function playMusic(src) {
        audioElement.setAttribute('src', src);
        audioElement.pause();
        audioElement.load();
        audioElement.play();
    }

    var playing_ikkesint = false;


    world.onRender(function (ctx) {

        if (squirrel_one_dead && squirrel_two_dead) {
            game_running = false;

            var game_element = document.getElementById("game");
            game_element.style.backgroundImage = 'url("gfx/gameover.jpg")';
            game_element.onclick = start_game;


            ctx.font = "50pt Courier";
            ctx.fillText("Points: " + attacks_count, 790, 130);

            if (!playing_ikkesint) {
                playMusic("gfx/ikkesint.ogg");
                playing_ikkesint = true;
            }

        } else {
            if (game_running) {
                ctx.font = "20pt Courier";
                ctx.fillText("Points: " + attacks_count, 1010, 30);
                ctx.font = "14pt Courier";
                ctx.fillText("Boxes left: " + avaiableBoxes, 1000, 50);
            }
        }
    });

    function squirrels() {

        world.createEntity(standing_platform, {x: 8, y: 3.7});

        var squirrel1 = world.createEntity(squirrel, {x: 8, y: 2});

        squirrel1.onImpact(function (entity, normalForce, tangentialForce) {
            if (normalForce > 0.09) {
                squirrel_one_dead = true;

                setTimeout(function () {
                    squirrel1.destroy();
                }, 500);
            }
        });


        world.createEntity(standing_platform, {x: 9.3, y: 3.8});

        var squirrel2 = world.createEntity(squirrel, {x: 9.3, y: 2});

        squirrel2.onImpact(function (entity, normalForce, tangentialForce) {
            if (normalForce > 0.06) {
                squirrel_two_dead = true;
                setTimeout(function () {
                    squirrel2.destroy();
                }, 500);
            }
        });
    }

    playMusic("gfx/music.mp4");


    function destroy_all_boxes() {
        var o = world.find(0, 0, 10, 10);
        for (key in o) {
            if(o[key]._name == "boxbox") {
                o[key].destroy();
            }
        }
    }

    function start_game() {

        destroy_all_boxes();

        game_running = true;
        avaiableBoxes = 20;
        attacks_count = 0;
        squirrel_one_dead = false;
        squirrel_two_dead = false;

        var game_element = document.getElementById("game");
        game_element.style.backgroundImage = 'url("gfx/level.jpg")';
        game_element.onclick = null;

        squirrels();
        setTimeout(trash_run, 8000);

    }



    function show_instructions() {
        document.getElementById("game").style.backgroundImage = 'url("gfx/instructions.jpg")';
    }

    setTimeout(show_instructions, 3000);
    setTimeout(start_game, 9000);


})();


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
            document.getElementById("game").style.backgroundImage = 'url("gfx/gameover.jpg")';

            ctx.font = "50pt Courier";
            ctx.fillText("Points: " + attacks_count, 790, 130);

            if(!playing_ikkesint) {
                playMusic("gfx/ikkesint.ogg");
                playing_ikkesint = true;
            }

        } else {
            ctx.font = "20pt Courier";
            ctx.fillText("Points: " + attacks_count, 1010, 30);
            ctx.font = "14pt Courier";
            ctx.fillText("Boxes left: " + avaiableBoxes, 1000, 50);
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

    squirrels();
    setTimeout(trash_run, 8000);

})();
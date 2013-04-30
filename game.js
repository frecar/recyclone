(function () {

    build_walls(world);
    build_slope();
    activate_mouse(canvas);

    function squirrels() {

        world.createEntity(standing_platform, {x:8, y:3.7});

        world.createEntity(squirrel, {x:8, y:2}).onImpact(function (entity, normalForce, tangentialForce) {

            if (normalForce > 1) {
                squirrel_one_dead = true;
                this.destroy();
            }
        });
    }

    squirrels();

    setTimeout(trash_run, 5000);

})();
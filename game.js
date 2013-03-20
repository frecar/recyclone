(function () {

    var canvas = document.getElementById('bbdemo');

    var world = boxbox.createWorld(canvas, {debugDraw: false, scale: 40});

    var player = world.createEntity({
        name: 'player',
        x: .5,
        y: 12,
        height: .2,
        width: .2,
        fixedRotation: true,
        friction: .3,
        restitution: 0.5,
        color: 'blue'
    });

    player.onKeydown(function (e) {

        if (this._destroyed) {
            return;
        }

        var i;
        var obj;
        var player = this;

        // determine what you're standing on
        var standingOn;
        var pos = this.position();
        var allUnderMe = world.find(pos.x - .08, pos.y + .1, pos.x + .09, pos.y + .105);
        for (i = 0; i < allUnderMe.length; i++) {
            obj = allUnderMe[i];
            if (obj !== player) {
                standingOn = obj;
                break;
            }
        }

        // jump
        if (e.keyCode === 32 && standingOn) {
            this.applyImpulse(2);
            return false;
        }

        // when airborn movement is restricted
        var force = 4;
        if (!standingOn) {
            force = force / 2;
        }

        // move left
        if (e.keyCode === 37) {
            this.setForce('movement', force, 270);
            this.friction(.1);
            return false;
        }

        // move right
        if (e.keyCode === 39) {
            this.setForce('movement', force, 90);
            this.friction(.1);
            return false;
        }

    });

    player.onKeyup(function (e) {

        if (this._destroyed) {
            return;
        }

        // clear movement force on arrow keyup
        if (e.keyCode === 37 || e.keyCode === 39) {
            this.clearForce('movement');
            this.friction(3);
            return false;
        }

    });

    player.onImpact(function (other, power, tangentPower) {
        if (power > 3) {
            //damage(power - 3);
        }
    });

    world.onRender(function (ctx) {

    });

    

    var groundTemplate = {
        name: 'ground',
        type: 'static',
        height: 0.1,
        color: 'white'
    };

    //Wall of heaven
    world.createEntity(groundTemplate, {width: 500, x: 0, y: 0});

    //Wall of ground
    world.createEntity(groundTemplate, {width: 500, x: 3, y: 18});

    //Left wall
    world.createEntity(groundTemplate, {width: 0.1, x: 0, height: 500, y: 5});

    //Right wall
    world.createEntity(groundTemplate, {width: 0.1, x: 32, y: 0, height: 20});

    function draw_invisible(ctx, x, y) {
        return false;
    }

    world.createEntity(
        {
            shape: "polygon",
            type: "static",
            points: [
                {x: 0, y: 4},
                {x: 3, y: 11}
            ],
            rotation: 120,
            draw: draw_invisible,
            x: 0,
            y: 0,
            friction: 0.1
        });

    world.createEntity(
        {
            shape: "polygon",
            type: "static",
            points: [
                {x: 3, y: 11},
                {x: 6, y: 14}
            ],
            rotation: 120,
            draw: draw_invisible,

            x: 0,
            y: 0,
            friction: 0
        });

    world.createEntity(
        {
            shape: "polygon",
            type: "static",
            points: [
                {x: 3.5, y: 11.5},
                {x: 7, y: 12}
            ],
            rotation: 120,
            draw: draw_invisible,

            x: 0,
            y: 0,
            friction: 0
        });

    world.createEntity(
        {
            shape: "polygon",
            type: "static",
            points: [
                {x: 4, y: 12},
                {x: 7, y: 11}
            ],
            rotation: 120,
            draw: draw_invisible,

            x: 0,
            y: 0,
            friction: 0
        });

    //Lastebil
    world.createEntity(
        {
            shape: "square",
            type: "static",
            image:"lastebil.png",
            imageStretchToFit: true,
            x: -1,
            y: 3
        });


    //Søppelpose
    world.createEntity({
        name: 'circle',
        shape: 'circle',
        radius: 0.7,
        x: 0,
        y: 1,
        density: 1,
        friction: 1,
        image: 'pose.png',
        imageStretchToFit: true
    }).applyImpulse(90,1);

})();


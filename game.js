(function () {

    var canvas = document.getElementById('game');

    var world = boxbox.createWorld(canvas, {debugDraw: false, scale: 40});

    
    var player = world.createEntity({
        name: 'player',
        x: 6,
        y: 0,
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
    world.createEntity(groundTemplate, {width: 500, x: 3, y: 13.8, draw: draw_invisible});

    //Left wall
    world.createEntity(groundTemplate, {width: 0.1, x: 0, height: 500, y: 5});

    //Right wall
    world.createEntity(groundTemplate, {width: 0.1, x: 32, y: 0, height: 20});

    function draw_invisible(ctx, x, y) {
        return false;
    }

    //Slope part 1
    world.createEntity(
        {
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
            friction: 0.1
        });

    //Slope part 2
    world.createEntity(
        {
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

    //Butikk
    world.createEntity(
        {
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
            type: "static",
            image: "lastebil.png",
            imageStretchToFit: true,
            width: 1.5,
            height: 0.7,
            x: 1,
            y: 2
        });


    function delete_after_seconds() {
        console.log(this);
    }

    //Ekorn 1
    world.createEntity({
        name: 'circle',
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
        name: 'circle',
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
        type: 'static',
        height: 0.1,
        color: 'white',
        width: .4,
        x: 28.3,
        y: 10.2,
        draw: draw_invisible
    });


    function addPoop() {
        var poop = world.createEntity({
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

})();


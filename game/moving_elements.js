/*
 var poop = {
 name: 'poop',
 type: 'dynamic',
 x: 13.3,
 y: 10.2,
 image: "poop.png",
 imageStretchToFit: true
 };

 poop.applyImpulse(120, 60);
 poop.onImpact(function (entity, normalForce, tangentialForce) {
 this.destroy();
 });
 */


function trash_run() {

    if (game_running) {

        var soppelpose = world.createEntity({
            name: 'soppelpose',
            shape: 'circle',
            radius: 0.2,
            x: 0.5,
            y: 0.1,
            width: 0.1,
            height: 0.1,
            density: 1,
            friction: 0.1,
            image: "gfx/pose.png",
            imageStretchToFit: true
        });

        attacks_count += 1;
        attacks_count += avaiableBoxes;

        soppelpose.applyImpulse(8 + Math.random() * 3, 0);

        soppelpose.onFinishContact(function () {
            setTimeout(function () {
                soppelpose.destroy();
            }, 4500);
        });


        soppelpose.onImpact(function (entity, force, friction) {

            if (entity._name == 'boxbox') {
                setTimeout(function () {
                    entity.destroy();
                }, 4500);
            }
        });

        avaiableBoxes += 3;

        setTimeout(trash_run, 2400 + Math.random() * 600);
    }

}
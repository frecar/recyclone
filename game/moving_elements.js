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

    var soppelpose = world.createEntity({
        name: 'soppelpose',
        shape: 'circle',
        radius: 0.1,
        x: 0.5,
        y: 0.1,
        width: 0.1,
        height: 0.1,
        density: 1,
        friction: 0.2
    });

    soppelpose.applyImpulse(2 + Math.random(), 0);

    soppelpose.onFinishContact(function() {
        setTimeout(function() {
            soppelpose.destroy();
        }, 2500);
    });

    soppelpose.onImpact(function( entity, force, friction ){

        if(entity._name == 'boxbox') {
            console.log(entity._name);
            console.log(entity);
            setTimeout(function() {
                entity.destroy();
            }, 500);
        }
    });


    avaiableBoxes += 8;

    setTimeout(trash_run, 3000);


}
var soppelpose = {
    name: 'soppelpose',
    shape: 'circle',
    radius: 0.1,
    x: 0.5,
    y: 0.1,
    width:0.1,
    height:0.1,
    density: 1,
    friction: 0.2
};


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

    world.createEntity(soppelpose).applyImpulse(2 + Math.random(), 0);
    avaiableBoxes += 5;

    setTimeout(trash_run, 1000);



}
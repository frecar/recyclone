var soppelpose = {
    name: 'soppelpose',
    shape: 'circle',
    radius: 0.7,
    x: 4,
    y: 2,
    density: 1,
    friction: 0.2,
    image: 'pose.png',
    imageStretchToFit: true
}.applyImpulse(150);


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
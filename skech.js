var back, bone, sky, slide, dog, deer, child, kam, jam;

function preload() {
    sky = loadImage("img/sky.png");
    building = loadImage("img/building.png");
    station = loadImage("img/station.png");
    shop = loadImage("img/shop.png");
    aeroplane = loadImage("img/plane.png");
    roads = loadImage("img/road.jpg");
    takeoff = loadSound("sound/airplane+cessna.wav");
}

function setup() {
    createCanvas(7600, 1000);
    man = createSprite(3000, 500);
    man.scale = 3.6;
    man.addImage(sky);

    road = createSprite(5000, 1270);
    road.scale = 2.7;
    road.addImage(roads);

    stations = createSprite(400, 580);
    stations.scale = 0.6;
    stations.addImage(station);

    build1 = createSprite(1690, 350);
    build1.scale = 0.6;
    build1.addImage(building);

    build2 = createSprite(3600, 350);
    build2.scale = 0.6;
    build2.addImage(building);

    build3 = createSprite(5500, 350);
    build3.scale = 0.6;
    build3.addImage(building);

    stations = createSprite(7250, 580);
    stations.scale = 0.6;
    stations.addImage(station);

    // build5 = createSprite(9300, 350);
    // build5.scale = 0.6;
    // build5.addImage(building);

    // shops = createSprite(10490, 600);
    // shops.scale = 0.6;
    // shops.addImage(shop);

    plane = createSprite(270, 950);
    plane.scale = 0.5;
    plane.addImage(aeroplane);
}

function draw() {
    background("black");
    drawSprites();

    if (keyDown("d")) {
        plane.x = plane.x + 15;
        takeoff.play();
    }
    if (keyDown("w")) {
        plane.y = plane.y - 15;
        takeoff.play();
    }
    if (keyDown("s")) {
        plane.y = plane.y + 15;
        takeoff.play();
    }
    if (keyDown("space")) {
        plane.x = plane.x + 20;
    }
}
var back, bone, sky, slide, dog, deer, child, kam, jam;

function preload() {
    sky = loadImage("img/sky.png");
    building = loadImage("img/building.png");
    station = loadImage("img/station.png");
    shop = loadImage("img/shop.png");
    aeroplane = loadImage("img/plane.png");
    roads = loadImage("img/road.jpg");
    takeoff = loadSound("sound/airplane+cessna.wav");
    crash = loadSound("sound/crash.wav");
    loud = loadSound("sound/voice1.wav");
    birds = loadImage("img/flyingBird.gif");
    human = loadImage("img/man.png");
    planes = loadImage("img/return.png");
}

function setup() {
    createCanvas(7600, 1050);
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

    // bird = createSprite(7250, 580);
    // bird.scale = 01;
    // bird.addImage(birds);

    plane = createSprite(270, 950);
    plane.scale = 0.5;
    plane.addImage(aeroplane);

    planeGroup = new Group();
    manGroup = new Group();
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
        plane.x = plane.x + 80;
    }

    if (plane.isTouching(stations)) {
        plane.velocityX = 0;
        textSize(150);
        text("You Win", 7000, 140);
        manGroup.velocityX = 0;
    }

    generatePlane();
    for (var i = 0; i < planeGroup.length; i++) {
        var temp = planeGroup.get(i);

        if (temp.isTouching(plane)) {
            crash.play();
            // coinScore++;
            temp.destroy();
            temp = null;
        }
    }

    generateHumans();
    for (var i = 0; i < manGroup.length; i++) {
        var temp = manGroup.get(i);

        if (temp.isTouching(plane)) {
            loud.play();
            // coinScore++;
            temp.destroy();
            temp = null;
        }
    }
}

function generatePlane() {
    if (frameCount % 70 === 0) {
        var play = createSprite(8000, 1);
        play.y = random(20, 700);
        play.addImage(planes);
        play.scale = 0.5;
        play.velocityX = -20;

        play.lifetime = 8000;
        planeGroup.add(play);
    }
}

function generateHumans() {
    if (frameCount % 40 === 0) {
        var can = createSprite(6500, 800);
        can.y = random(995, 810);
        can.addImage(human);
        can.scale = 0.045;
        can.velocityX = -15;

        can.lifetime = 8000;
        manGroup.add(can);
    }
}
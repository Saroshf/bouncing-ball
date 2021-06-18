// Functions for Snowflakes

function newBall(initX, initY, initR, initV, initA, initColour) {
    return {
        x: initX,
        y: initY,
        r: initR,
        v: initV,
        a: initA,
        colour: initColour
    }

}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: 30,
        v: 1,
        a: 0.5,
        colour: randomRGB()
    };
}

function drawBall(aBall) {
    fill(aBall.colour);
    circle(aBall.x, aBall.y, aBall.r, "fill");
}

function moveBall(aBall) {
    aBall.y += aBall.v;
    aBall.v += aBall.a;
    if (aBall.y >= cnv.height - aBall.r) {
        aBall.y = cnv.height - aBall.r;
        aBall.v = -aBall.v;
        aBall.v += aBall.a;
        aBall.v += 2.5; // Ball loses energy after every bounce

    }
}

// function eqBounce(aBall) {
//     aBall.y += aBall.v;
//     aBall.v += aBall.a;
//     if (aBall.y >= cnv.height - aBall.r) {
//         // aBall.y = cnv.height - aBall.r;
//         aBall.v = -aBall.v;
//         aBall.v += aBall.a;
//     }
// }

function addaBall(x, y) {
    balls.push(newBall(x, y, 40, 1, 0.6, randomRGB()));
    console.log(balls);
}


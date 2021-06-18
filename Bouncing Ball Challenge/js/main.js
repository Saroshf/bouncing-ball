// Bouncing Balls

// Initalizing canvas and graphic context
// let timer = scope.setTimeout()
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
let btn1 = document.getElementById("eqbounce")
cnv.width = 800;
cnv.height = 600;

let balls = [];
// Main Draw Loop
requestAnimationFrame(draw);
function draw() {
    background("black");
    for (let i = 0; i < balls.length; i++) {
        moveBall(balls[i]);
        drawBall(balls[i]);
    }
    requestAnimationFrame(draw);
}
// Event Listeners
cnv.addEventListener("click", clickLocation);
// btn1.addEventListener("click", loadBounce);

function clickLocation(event) { // Get X and Y of mouse pointer
    let rect = cnv.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    addaBall(x, y);
    console.log("Click on Canvas");
}

setInterval(removeBall, 10000);

function removeBall() {
    balls.splice(0, 1);
    // for (let i = balls.length - 1; i >= 0; i--) {
    //     if (balls[i] < 500) {
    //       balls.splice(i, 1);
    //     }
    //   }
}
// function loadBounce() {
//     for (let i = 0; i < balls.length; i++) {
//         eqBounce(balls[i]);
//     }
//     console.log("Click on Button");
// }

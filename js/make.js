////////////////////   A ////////////////////////

//////////////////// TEST////////////////
function test() {
  ctx.beginPath();
  ctx.rect(0, 600, 40, 200);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
  xday[x] -= 5;
}

// document.addEventListener("keydown", function (event) {
//   console.log(event.keyCode);
//   if (event.keyCode == 37 && x > 0) {
//     if (y <= xday[x - 1] * 40 - 120) {
//       old = x;
//       x -= 1;
//     }
//   } else if (event.keyCode == 39 && x < 8) {
//     if (y <= xday[x + 1] * 40 - 120 && y <= xday[x + 2] * 40 - 40) {
//       old = x;
//       x += 1;
//     }
//   }
// });
///////////////////////   L1   ////////////////

// function move_l1() {
//   if (y <= xday[x] * 40 - 120 && y <= xday[x + 1] * 40 - 120) {
//     ctx.clearRect(0, 0, 400, 800);
//     fix_color();
//     // ctx.clearRect(old * 40, y - speed, 40, speed);
//     // ctx.clearRect(old * 40 + 40, y - speed + 80, 40, speed);
//     l1(x, y);
//     y += speed;
//     requestAnimationFrame(move_l1);
//   } else {
//     if (ss(x, x + 1) > 0) {
//       xday[x + 1] -= 1;
//       xday[x] = xday[x + 1] - 2;
//     } else {
//       xday[x] -= 3;
//       xday[x + 1] = xday[x] + 2;
//     }
//     y -= speed;
//     color[x][y / 40] = "green";
//     color[x][y / 40 + 1] = "green";
//     color[x][y / 40 + 2] = "green";
//     color[x + 1][y / 40 + 2] = "green";
//     x = 0;
//     y = 0;
//     a();
//   }
// }

// ////////////////////////   LN1   ////////////////
// function ln1(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * 40 + 40, y, 40, 120);
//   ctx.rect(x * 40, y + 80, 40, 40);
//   ctx.fillStyle = "blue";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_ln1() {
//   if (y <= xday[x] * 40 - 120 && y <= xday[x + 1] * 40 - 120) {
//     ctx.clearRect(x * 40 + 40, y - speed, 40, speed);
//     ctx.clearRect(x * 40, y - speed + 80, 40, speed);
//     ln1(x, y);
//     y += speed;
//     requestAnimationFrame(move_ln1);
//   } else {
//     if (ss(x + 1, x) > 0) {
//       xday[x] -= 1;
//       xday[x + 1] = xday[x] - 2;
//     } else {
//       xday[x + 1] -= 3;
//       xday[x] = xday[x + 1] + 2;
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }

// ////////////////////////   z1   ////////////////
// function z1(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * 40, y + 40, 40, 80);
//   ctx.rect(x * 40 + 40, y, 40, 80);
//   ctx.fillStyle = "violet";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_z1() {
//   if (y <= xday[x] * 40 - 120 && y <= xday[x + 1] * 40 - 80) {
//     ctx.clearRect(x * 40, y + 40 - speed, 40, speed);
//     ctx.clearRect(x * 40 + 40, y - speed, 40, speed);
//     z1(x, y);
//     y += speed;
//     requestAnimationFrame(move_z1);
//   } else {
//     if (ss(x, x + 1) > 0) {
//       xday[x + 1] -= 2;
//       xday[x] = xday[x + 1] + 1;
//     } else {
//       xday[x] -= 2;
//       xday[x + 1] = xday[x] - 1;
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }
// ////////////////////////// l2 //////////////////////////////
// function l2(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * 40 + 80, y, 40, 40);
//   ctx.rect(x * 40, y + 40, 120, 40);
//   ctx.fillStyle = "green";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_l2() {
//   if (
//     y <= xday[x] * 40 - 40 &&
//     y <= xday[x + 1] * 40 - 40 &&
//     y <= xday[x + 2] * 40 - 80
//   ) {
//     ctx.clearRect(x * 40 + 80, y - speed, 40, speed);
//     ctx.clearRect(x * 40, y + 40 - speed, 120, speed);
//     l2(x, y);
//     y += speed;
//     requestAnimationFrame(move_l2);
//   } else {
//     if (xday[x] > xday[x + 1]) {
//       xday[x + 1] -= 2;
//       xday[x] = xday[x + 1] + 1;
//     } else {
//       xday[x] -= 2;
//       xday[x + 1] = xday[x] - 1;
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }
// ////////////// S1///////////////////////
// function s1(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * 40 + 40, y + 40, 40, 80);
//   ctx.rect(x * 40, y, 40, 80);
//   ctx.fillStyle = "orange";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_s1() {
//   if (y <= xday[x + 1] * 40 - 120 && y <= xday[x] * 40 - 80) {
//     ctx.clearRect(x * 40 + 40, y + 40 - speed, 40, speed);
//     ctx.clearRect(x * 40, y - speed, 40, speed);
//     s1(x, y);
//     y += speed;
//     requestAnimationFrame(move_s1);
//   } else {
//     if (ss(x + 1, x) > 0) {
//       xday[x] -= 2;
//       xday[x + 1] = xday[x] + 1;
//     } else {
//       xday[x + 1] -= 2;
//       xday[x] = xday[x + 1] - 1;
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }
// ////////////////////// t1/////////////////
// function t1(x, y) {
//   ctx.beginPath();
//   ctx.rect(x * 40, y, 40, 120);
//   ctx.rect(x * 40 + 40, y + 40, 40, 40);
//   ctx.fillStyle = "yellow";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_t1() {
//   if (y <= xday[x] * 40 - 120 && y <= xday[x + 1] * 40 - 80) {
//     ctx.clearRect(x * 40, y - speed, 40, speed);
//     ctx.clearRect(x * 40 + 40, y + 40 - speed, 40, speed);
//     t1(x, y);
//     y += speed;
//     requestAnimationFrame(move_t1);
//   } else {
//     if (ss(x, x + 1) > 0) {
//       xday[x + 1] -= 1;
//       xday[x] = xday[x + 1] - 1;
//     } else {
//       xday[x] -= 3;
//       xday[x + 1] = xday[x] + 1;
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }

// //////////////////// i1 ////////////////
// function i1(x, y) {
//   ctx.beginPath();
//   ctx.rect(x, y, 40, 160);
//   ctx.fillStyle = "aqua";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_i1() {
//   if (y <= xday[x] * 40 - 160) {
//     ctx.clearRect(x, y - speed, 40, speed);
//     i1(x, y);
//     y += speed;
//     requestAnimationFrame(move_i1);
//   } else {
//     x = 0;
//     y = 0;
//     xday[x] -= 4;
//     a();
//   }
// }
// //////////////// vuong //////////////////
// function vuong(x, y) {
//   ctx.beginPath();
//   ctx.rect(x, y, 80, 80);
//   ctx.fillStyle = "red";
//   ctx.fill();
//   ctx.closePath();
// }
// function move_vuong() {
//   if (y <= xday[x] * 40 - 80 && y <= xday[x + 1] * 40 - 80) {
//     ctx.clearRect(x, y - speed, 80, speed);
//     vuong(x, y);
//     y += speed;
//     requestAnimationFrame(move_vuong);
//   } else {
//     if (ss(x, x + 1) > 0) {
//       xday[x + 1] -= 2;
//       xday[x] = xday[x + 1];
//     } else {
//       xday[x] -= 2;
//       xday[x + 1] = xday[x];
//     }
//     x = 0;
//     y = 0;
//     a();
//   }
// }

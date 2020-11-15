// function move_l1() {
//   if (
//     by < 18 &&//y=17
//     (by % 1 != 0 ||
//       (color[by + 6][bx] == w &&
//         color[by + 6][bx + 1] == w &&
//         color[by + 6][bx + 2] == w))
//   ) {
//     ctx.clearRect(0, 0, 400, 800);
//     setcolor();
//     l1(bx, by);
//     by += speed;
//     by = Math.round(by * 100) / 100;
//     if (left) {
//       let t = Math.round(by);
//       if (
//         bx > 0 &&
//         color[t + 5][bx] == w &&
//         color[t + 4][bx + 1] == w &&
//         color[t + 5][bx - 1] == w
//       ) {
//         by = t;
//         bx -= 1;
//         left = false;
//       }
//     }
//     if (right) {
//       let t = Math.round(by);
//       if (bx < 7 && color[t + 4][bx + 3] == w && color[t + 5][bx + 3] == w) {
//         by = t;
//         bx += 1;
//         right = false;
//       }
//     }
//     requestAnimationFrame(move_l1);
//   } else {
//     console.log(by);
//     ctx.clearRect(0, 0, 400, 800);
//     setcolor();
//     l1(bx, by);
//     color[by + 4][bx + 2] = o;
//     color[by + 5][bx] = o;
//     color[by + 5][bx + 1] = o;
//     color[by + 5][bx + 2] = o;
//     clear(by + 1);
//     bx = 0;
//     by = -3;
//     for (let i = 0; i < 10; i++) {
//       if (color[3][i] != w) return 0;
//     }
//     return run();
//   }
// }

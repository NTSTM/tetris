function run() {
  random();
  dem % 2 == 0 ? (box = next1) : (box = next2); // xác định box là gì
  if (box == 7) bx = 4;
  else if (box == 6) by = 0;
  xdwidth(); // xac dinh a,b,c,d,e
  var st = setInterval(function () {
    if (check()) {
      ctx.clearRect(0, 0, 400, 800); /// xoá
      setcolor(); // khôi phục màu sắc đáy
      draw();
      by++;
    } else {
      by -= 1;
      clearInterval(st); // dừng lại
      addcolor();
      for (let i = 0; i < 5 - a; i++) {
        clear(by + i);
      }
      if (gameover() == false) {
        bx = 3;
        by = -1;
        dem += 1;
        run();
      } else {
        alert("game over");
        location.reload();
      }
    }
  }, 50);
}

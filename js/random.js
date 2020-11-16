function random() {
  dtx.clearRect(0, 0, 160, 160);
  if (dem % 2 == 0) {
    next2 = Math.floor(Math.random() * 7) + 1;
    next = next2;
  } else {
    next1 = Math.floor(Math.random() * 7) + 1;
    next = next1;
  }
  switch (next) {
    case 1:
      l1(1, 1, 1);
      break;
    case 2:
      ln1(1, 1, 1);
      break;
    case 3:
      z1(1, 1, 1);
      break;
    case 4:
      s1(1, 1, 1);
      break;
    case 5:
      t1(1, 1, 1);
      break;
    case 6:
      i1(0, 2, 1);
      break;
    default:
      vuong(2, 1, 1);
  }
}
function randomFirst() {
  next1 = Math.floor(Math.random() * 7) + 1;
  next1 = 1;
}

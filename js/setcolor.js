function setcolor() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
      ctx.beginPath();
      ctx.rect(j * size, i * size, size, size);
      ctx.fillStyle = color[i + 4][j];
      ctx.fill();
      ctx.closePath();
    }
  }
}
function addcolor() {
  let mau;
  switch (box % 10) {
    case 1:
      mau = o;
      break;
    case 2:
      mau = bl;
      break;
    case 3:
      mau = r;
      break;
    case 4:
      mau = g;
      break;
    case 5:
      mau = v;
      break;
    case 6:
      mau = aq;
      break;
    default:
      mau = y;
  }
  let a1, b1, c1, d1, e1, f1, g1, h1;
  switch (box) {
    case 1:
      a1 = 0;
      b1 = 2;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 1;
      h1 = 2;
      break;
    case 2:
      a1 = 0;
      b1 = 0;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 1;
      h1 = 2;
      break;
    case 3:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 1;
      f1 = 1;
      g1 = 1;
      h1 = 2;
      break;
    case 4:
      a1 = 0;
      b1 = 1;
      c1 = 0;
      d1 = 2;
      e1 = 1;
      f1 = 0;
      g1 = 1;
      h1 = 1;
      break;
    case 5:
      a1 = 0;
      b1 = 1;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 1;
      h1 = 2;
      break;
    case 6:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 0;
      f1 = 2;
      g1 = 0;
      h1 = 3;
      break;
    case 7:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 1;
      f1 = 0;
      g1 = 1;
      h1 = 1;
      break;
    case 21:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 1;
      f1 = 1;
      g1 = 2;
      h1 = 1;
      break;
    case 31:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 0;
      f1 = 2;
      g1 = 1;
      h1 = 0;
      break;
    case 41:
      a1 = 0;
      b1 = 0;
      c1 = 1;
      d1 = 0;
      e1 = 2;
      f1 = 0;
      g1 = 2;
      h1 = 1;
      break;
    case 22:
      a1 = 0;
      b1 = 1;
      c1 = 1;
      d1 = 1;
      e1 = 2;
      f1 = 0;
      g1 = 2;
      h1 = 1;
      break;
    case 32:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 0;
      f1 = 2;
      g1 = 1;
      h1 = 2;
      break;
    case 42:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 1;
      f1 = 0;
      g1 = 2;
      h1 = 0;
      break;
    case 23:
      a1 = 0;
      b1 = 1;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 2;
      h1 = 0;
      break;
    case 24:
      a1 = 0;
      b1 = 0;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 2;
      h1 = 1;
      break;
    case 25:
      a1 = 0;
      b1 = 1;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 2;
      h1 = 1;
      break;
    case 35:
      a1 = 0;
      b1 = 0;
      c1 = 0;
      d1 = 1;
      e1 = 0;
      f1 = 2;
      g1 = 1;
      h1 = 1;
      break;
    case 45:
      a1 = 0;
      b1 = 0;
      c1 = 1;
      d1 = 0;
      e1 = 1;
      f1 = 1;
      g1 = 2;
      h1 = 0;
      break;
    case 26:
      a1 = 0;
      b1 = 0;
      c1 = 1;
      d1 = 0;
      e1 = 2;
      f1 = 0;
      g1 = 3;
      h1 = 0;
      break;
  }
  color[by + a1 + 4][bx + b1] = mau;
  color[by + c1 + 4][bx + d1] = mau;
  color[by + e1 + 4][bx + f1] = mau;
  color[by + g1 + 4][bx + h1] = mau;
}

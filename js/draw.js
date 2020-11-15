function l1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size + 2 * size, b * size, size, size);
    dtx.rect(a * size, b * size + size, 3 * size, size);
    dtx.fillStyle = o;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size + 2 * size, b * size, size, size);
    ctx.rect(a * size, b * size + size, 3 * size, size);
    ctx.fillStyle = o;
    ctx.fill();
    ctx.closePath();
  }
}

function l2(a, b, c) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size * 2, size);
  ctx.rect(a * size + size, b * size + size, size, size * 2);
  ctx.fillStyle = o;
  ctx.fill();
  ctx.closePath();
}

function l3(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size * 3, size);
  ctx.rect(a * size, b * size + size, size, size);
  ctx.fillStyle = o;
  ctx.fill();
  ctx.closePath();
}
function l4(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size, size * 3);
  ctx.rect(a * size + size, b * size + size * 2, size, size);
  ctx.fillStyle = o;
  ctx.fill();
  ctx.closePath();
}

function ln1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size, b * size, size, size * 2);
    dtx.rect(a * size, b * size + size, 3 * size, size);
    dtx.fillStyle = bl;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size, b * size, size, size * 2);
    ctx.rect(a * size, b * size + size, 3 * size, size);
    ctx.fillStyle = bl;
    ctx.fill();
    ctx.closePath();
  }
}

function ln2(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size + size * 2, size, size);
  ctx.rect(a * size + size, b * size, size, size * 3);
  ctx.fillStyle = bl;
  ctx.fill();
  ctx.closePath();
}
function ln3(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size * 3, size);
  ctx.rect(a * size + size * 2, b * size + size, size, size);
  ctx.fillStyle = bl;
  ctx.fill();
  ctx.closePath();
}
function ln4(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size * 2, size);
  ctx.rect(a * size, b * size + size, size, size * 2);
  ctx.fillStyle = bl;
  ctx.fill();
  ctx.closePath();
}
function z1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size, b * size, size * 2, size);
    dtx.rect(a * size + size, b * size + size, size * 2, size);
    dtx.fillStyle = r;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size, b * size, size * 2, size);
    ctx.rect(a * size + size, b * size + size, size * 2, size);
    ctx.fillStyle = r;
    ctx.fill();
    ctx.closePath();
  }
}
function z2(a, b) {
  ctx.beginPath();
  ctx.rect(a * size + size, b * size, size, size * 2);
  ctx.rect(a * size, b * size + size, size, size * 2);
  ctx.fillStyle = r;
  ctx.fill();
  ctx.closePath();
}
function s1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size + size, b * size, size * 2, size);
    dtx.rect(a * size, b * size + size, size * 2, size);
    dtx.fillStyle = g;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size + size, b * size, size * 2, size);
    ctx.rect(a * size, b * size + size, size * 2, size);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.closePath();
  }
}
function s2(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size, size * 2);
  ctx.rect(a * size + size, b * size + size, size, size * 2);
  ctx.fillStyle = g;
  ctx.fill();
  ctx.closePath();
}

function t1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size + size, b * size, size, size);
    dtx.rect(a * size, b * size + size, 3 * size, size);
    dtx.fillStyle = v;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size + size, b * size, size, size);
    ctx.rect(a * size, b * size + size, 3 * size, size);
    ctx.fillStyle = v;
    ctx.fill();
    ctx.closePath();
  }
}

function t2(a, b) {
  ctx.beginPath();
  ctx.rect(a * size + size, b * size, size, size * 3);
  ctx.rect(a * size, b * size + size, size, size);
  ctx.fillStyle = v;
  ctx.fill();
  ctx.closePath();
}

function t3(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size * 3, size);
  ctx.rect(a * size + size, b * size + size, size, size);
  ctx.fillStyle = v;
  ctx.fill();
  ctx.closePath();
}
function t4(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size, size * 3);
  ctx.rect(a * size + size, b * size + size, size, size);
  ctx.fillStyle = v;
  ctx.fill();
  ctx.closePath();
}
function i1(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size, b * size, size * 4, size);
    dtx.fillStyle = aq;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size, b * size, size * 4, size);
    ctx.fillStyle = aq;
    ctx.fill();
    ctx.closePath();
  }
}
function i2(a, b) {
  ctx.beginPath();
  ctx.rect(a * size, b * size, size, size * 4);
  ctx.fillStyle = aq;
  ctx.fill();
  ctx.closePath();
}
function vuong(a, b, c) {
  if (c == 1) {
    dtx.beginPath();
    dtx.rect(a * size, b * size, size * 2, size * 2);
    dtx.fillStyle = y;
    dtx.fill();
    dtx.closePath();
  } else {
    ctx.beginPath();
    ctx.rect(a * size, b * size, size * 2, size * 2);
    ctx.fillStyle = y;
    ctx.fill();
    ctx.closePath();
  }
}
function draw() {
  switch (box) {
    case 1:
      l1(bx, by);
      break;
    case 21:
      l2(bx, by);
      break;
    case 31:
      l3(bx, by);
      break;
    case 41:
      l4(bx, by);
      break;
    case 2:
      ln1(bx, by);
      break;
    case 22:
      ln2(bx, by);
      break;
    case 32:
      ln3(bx, by);
      break;
    case 42:
      ln4(bx, by);
      break;
    case 3:
      z1(bx, by);
      break;
    case 23:
      z2(bx, by);
      break;
    case 4:
      s1(bx, by);
      break;
    case 24:
      s2(bx, by);
      break;
    case 5:
      t1(bx, by);
      break;
    case 25:
      t2(bx, by);
      break;
    case 35:
      t3(bx, by);
      break;
    case 45:
      t4(bx, by);
      break;
    case 6:
      i1(bx, by);
      break;
    case 26:
      i2(bx, by);
      break;
    default:
      vuong(bx, by);
      break;
  }
}

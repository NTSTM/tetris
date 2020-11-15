function xdwidth() {
  switch (box) {
    case 31:
      a = 3;
      b = 1;
      c = 0;
      d = 0;
      break;
    case 32:
      a = 3;
      b = 0;
      c = 0;
      d = 1;
      break;
    case 35:
      a = 3;
      b = 0;
      c = 1;
      d = 0;
      break;
    case 4:
      a = 3;
      b = 1;
      c = 1;
      d = 0;
      break;
    case 3:
      a = 3;
      b = 0;
      c = 1;
      d = 1;
      break;
    case 41:
      a = 2;
      b = 2;
      c = 2;
      break;
    case 22:
      a = 2;
      b = 2;
      c = 2;
      break;
    case 23:
      a = 2;
      b = 1;
      c = 2;
      break;
    case 45:
      a = 2;
      b = 2;
      c = 1;
      break;
    case 42:
      a = 2;
      b = 2;
      c = 0;
      break;
    case 21:
      a = 2;
      b = 0;
      c = 2;
      break;
    case 24:
      a = 2;
      b = 1;
      c = 2;
      break;
    case 25:
      a = 2;
      b = 2;
      c = 1;
      break;
    case 26:
      a = 1;
      b = 3;
      break;
    case 6:
      a = 4;
      b = 0;
      c = 0;
      d = 0;
      e = 0;
      break;
    case 7:
      a = 2;
      b = 1;
      c = 1;
      break;
    default:
      a = 3;
      b = 1;
      c = 1;
      d = 1;
  }
}

function check() {
  if (a == 1 && color[by + 4 + e][bx + 3] == gr) return true;
  if (
    a == 3 &&
    color[by + 4 + b][bx] == gr &&
    color[by + 4 + c][bx + 1] == gr &&
    color[by + 4 + d][bx + 2] == gr
  )
    return true;
  if (a == 2 && color[by + 4 + b][bx] == gr && color[by + 4 + c][bx + 1] == gr)
    return true;
  if (
    a == 4 &&
    color[by + 4][bx + 0] == gr &&
    color[by + 4][bx + 1] == gr &&
    color[by + 4][bx + 2] == gr &&
    color[by + 4][bx + 3] == gr
  )
    return true;
  return false;
}

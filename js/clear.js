function clear(aa) {
  for (let i = 0; i < 10; i++) {
    if (color[aa + 4][i] == gr) {
      return 0;
    }
  }
  for (let i = aa + 4; i > 3; i--) {
    for (let j = 0; j < 10; j++) {
      color[i][j] = color[i - 1][j];
    }
  }
  setcolor();
}

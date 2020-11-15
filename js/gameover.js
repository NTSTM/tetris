function gameover() {
  for (let i = 0; i < 10; i++) {
    if (color[3][i] != gr) return true;
  }
  return false;
}

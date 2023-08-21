function isValidSudoku(board: string[][]): boolean {
  const height = board.length;
  const width = board[0].length;

  for (let i = 0; i < height; i++) {
    const dict = {};
    for (let j = 0; j < width; j++) {
      const item = board[i][j];
      if (item !== ".") {
        if (dict[item] !== undefined) {
          return false;
        } else {
          dict[item] = 1;
        }
      }
    }
  }

  for (let i = 0; i < height; i++) {
    const dict = {};
    for (let j = 0; j < width; j++) {
      const item = board[j][i];
      if (item !== ".") {
        if (dict[item] !== undefined) {
          return false;
        } else {
          dict[item] = 1;
        }
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const dict = {};
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const init = board[i * 3 + k][j * 3 + l];
          if (init !== ".") {
            if (dict[init] !== undefined) {
              return false;
            } else {
              dict[init] = 1;
            }
          }
        }
      }
    }
  }

  return true;
}

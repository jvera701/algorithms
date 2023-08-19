function searchMatrix(matrix: number[][], target: number): boolean {
  let low = 0;
  let mid = 0;

  const height = matrix.length;
  const width = matrix[0].length;
  let high = height * width;

  while (low < high) {
    mid = Math.floor((low + high) / 2);

    const x = mid % width;
    const y = Math.floor(mid / width);
    const toFind = matrix[y][x];
    if (toFind == target) {
      return true;
    } else if (toFind < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return false;
}

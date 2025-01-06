export function score(x: number, y: number): number {
  const squaredDistance = Math.sqrt(x ** 2 + y ** 2);

  if (squaredDistance <= 1) {
    return 10;
  } else if (squaredDistance <= 5) {
    return 5;
  } else if (squaredDistance <= 10) {
    return 1;
  }

  return 0;
}

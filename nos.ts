function isNullOrFalse(x: null | undefined | false): boolean {
  return x === null || x === undefined || x === false;
}

const isNumber = (n: unknown): boolean => {
  return !Number.isNaN(n) && Number.isFinite(n);
};

export default isNumber;

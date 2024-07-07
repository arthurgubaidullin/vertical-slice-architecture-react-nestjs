export const randomUUID = (): string => {
  const crypto =
    typeof window !== 'undefined' &&
    typeof window.crypto?.randomUUID === 'function'
      ? window.crypto
      : require('crypto');

  return crypto.randomUUID();
};

export const randomUUID = () => {
  const crypto =
    typeof window !== 'undefined' &&
    typeof window.crypto?.randomUUID === 'function'
      ? window.crypto
      : require('crypto');

  return crypto.randomUUID();
};

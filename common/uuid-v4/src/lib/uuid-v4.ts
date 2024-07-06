export const randomUUID = () => {
  const crypto =
    typeof global.window?.crypto?.randomUUID === 'function'
      ? window.crypto
      : require('crypto');

  return crypto.randomUUID();
};

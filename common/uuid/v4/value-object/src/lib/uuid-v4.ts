export class UUIDV4 {
  constructor(private readonly uuidAsString: string) {}

  static create(value: string) {
    return new UUIDV4(value);
  }

  public toString() {
    return this.uuidAsString;
  }
}

export const randomUUID = () => {
  const crypto =
    typeof window !== 'undefined' &&
    typeof window.crypto?.randomUUID === 'function'
      ? window.crypto
      : require('crypto');

  return UUIDV4.create(crypto.randomUUID());
};

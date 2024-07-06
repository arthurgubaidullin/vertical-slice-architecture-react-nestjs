import { randomUUID } from './uuid-v4';

describe('uuid-v4', () => {
  it('should generate', () => {
    expect(randomUUID().length).toBeGreaterThan(0);
  });
});

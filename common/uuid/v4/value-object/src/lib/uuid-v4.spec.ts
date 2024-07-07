import { randomUUID } from './uuid-v4';

describe('uuid-v4', () => {
  it('should generate', () => {
    expect(randomUUID().toString().length).toBeGreaterThan(0);
  });
});

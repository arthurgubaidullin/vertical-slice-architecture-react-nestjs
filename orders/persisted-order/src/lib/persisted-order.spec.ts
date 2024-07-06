import { persistedOrder } from './persisted-order';

describe('persistedOrder', () => {
  it('should work', () => {
    expect(persistedOrder()).toEqual('persisted-order');
  });
});

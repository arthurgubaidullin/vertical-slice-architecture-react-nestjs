import { createOrder } from './create-order';

describe('createOrder', () => {
  it('should create', () => {
    expect(
      createOrder({ id: 'test', goods: 'test', quantity: 1, total: 1 })
    ).toBeTruthy();
  });
});

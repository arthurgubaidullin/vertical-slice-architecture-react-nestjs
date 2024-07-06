import { ordersClient } from './orders-client';

describe('ordersClient', () => {
  it('should work', () => {
    expect(ordersClient()).toEqual('orders-client');
  });
});

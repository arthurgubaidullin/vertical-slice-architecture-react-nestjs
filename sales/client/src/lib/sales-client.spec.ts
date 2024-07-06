import { salesClient } from './sales-client';

describe('salesClient', () => {
  it('should work', () => {
    expect(salesClient()).toEqual('sales-client');
  });
});

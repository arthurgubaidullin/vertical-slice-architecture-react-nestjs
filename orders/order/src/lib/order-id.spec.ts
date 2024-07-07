import * as E from 'fp-ts/Either';
import * as OrderId from './order-id';

describe('order-id', () => {
  it('should create', () => {
    expect(OrderId.create('a')).toEqual(E.right('a'));
  });

  it('should not create', () => {
    expect(OrderId.create('')).toEqual(E.left(expect.anything()));
  });
});

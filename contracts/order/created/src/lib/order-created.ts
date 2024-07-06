import * as t from 'io-ts';

export type OrderCreated = t.TypeOf<typeof OrderCreated>;

export const OrderCreated = t.readonly(
  t.strict({
    id: t.string,
    total: t.number,
  })
);

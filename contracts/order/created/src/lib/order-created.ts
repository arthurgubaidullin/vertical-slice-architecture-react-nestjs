import * as t from 'io-ts';

export type OrderCreated = t.TypeOf<typeof OrderCreated>;

export const OrderCreated = t.readonly(
  t.strict({
    id: t.string,
    total: t.number,
  })
);

export const create = (
  data: Readonly<{ id: string; total: number }>
): OrderCreated => ({
  id: data.id,
  total: data.total,
});

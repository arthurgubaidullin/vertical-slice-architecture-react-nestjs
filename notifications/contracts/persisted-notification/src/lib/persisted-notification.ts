import * as t from 'io-ts';

const Order = t.readonly(
  t.strict({
    id: t.string,
    total: t.number,
  })
);

export const OrderCreated = t.readonly(
  t.strict({
    id: t.string,
    type: t.literal('order.created'),
    order: Order,
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersistedNotification
  extends t.TypeOf<typeof PersistedNotification> {}

export const PersistedNotification = OrderCreated;

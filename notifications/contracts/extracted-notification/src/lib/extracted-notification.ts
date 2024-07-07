import * as t from 'io-ts';

const Order = t.readonly(
  t.strict({
    id: t.string,
    goods: t.string,
  })
);

export const OrderCreated = t.readonly(
  t.strict({
    type: t.literal('order.created'),
    order: Order,
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExtractedNotification
  extends t.TypeOf<typeof ExtractedNotification> {}

export const ExtractedNotification = OrderCreated;

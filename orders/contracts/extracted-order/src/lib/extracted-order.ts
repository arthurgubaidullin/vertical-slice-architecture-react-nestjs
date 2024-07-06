import * as t from 'io-ts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExtractedOrder extends t.TypeOf<typeof ExtractedOrder> {}

export const ExtractedOrder = t.readonly(
  t.strict({
    id: t.string,
    goods: t.string,
    quantity: t.number,
    total: t.number,
  })
);

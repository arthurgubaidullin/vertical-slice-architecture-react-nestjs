import * as t from 'io-ts';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersistedOrder extends t.TypeOf<typeof PersistedOrder> {}

export const PersistedOrder = t.readonly(
  t.strict({
    id: t.string,
    goods: t.string,
    quantity: t.number,
    total: t.number,
  })
);

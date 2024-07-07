import { pipe } from 'fp-ts/function';
import * as E from 'fp-ts/Either';
import * as t from 'io-ts';
import { fromNewtype, NonEmptyString } from 'io-ts-types';
import { iso as _iso, Newtype } from 'newtype-ts';
import * as OrderID from './order-id';
import * as Goods from './goods';
import * as Quantity from './quantity';
import * as Total from './total';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OrderStruct extends t.TypeOf<typeof OrderStruct> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SimplifiedOrder extends t.OutputOf<typeof OrderStruct> {}

const OrderStruct = t.readonly(
  t.strict({
    id: t.string.pipe(NonEmptyString),
    goods: t.string.pipe(NonEmptyString),
    quantity: t.Int,
    total: t.number,
  })
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Order
  extends Newtype<{ readonly Order: unique symbol }, OrderStruct> {}

const Order = fromNewtype<Order>(OrderStruct);

const iso = _iso<Order>();

export const create = (data: SimplifiedOrder) =>
  pipe(
    E.Do,
    E.bind('id', () => OrderID.create(data.id)),
    E.bind('goods', () => Goods.create(data.goods)),
    E.bind('quantity', () => Quantity.create(data.quantity)),
    E.bind('total', () => Total.create(data.total)),
    E.map((struct) => iso.wrap(struct))
  );

export const toJSON = (order: Order): OrderStruct => pipe(order, iso.unwrap);

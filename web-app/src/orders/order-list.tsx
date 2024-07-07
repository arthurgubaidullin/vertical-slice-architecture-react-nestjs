import * as RD from '@devexperts/remote-data-ts';
import * as OrdersClient from '@org/orders-client-react';
import { pipe } from 'fp-ts/function';
import { useContext } from 'react';
import { UUIDPreview } from '../common/uuid-preview';
import { observer } from 'mobx-react-lite';

export const OrderList = observer(() => {
  const ordersClient = useContext(OrdersClient.Context);

  const list = pipe(
    ordersClient.list(),
    RD.fold3(
      () => (
        <div>
          <span className="loading loading-spinner loading-xs"></span>
        </div>
      ),
      (e) => {
        throw e;
      },
      (orders) => (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Goods</th>
                <th>Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id} className={index % 2 ? 'hover' : ''}>
                  <th>
                    <UUIDPreview uuid={order.id} />
                  </th>
                  <td>{order.goods}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    )
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-2xl">Orders</h1>

      {list}
    </div>
  );
});

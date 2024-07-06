import { UUIDPreview } from './uuid-preview';

type Order = Readonly<{
  id: string;
  goods: string;
  quantity: number;
  total: number;
}>;

const orders: ReadonlyArray<Order> = [
  {
    id: crypto.randomUUID(),
    goods: 'Awesomeness',
    quantity: 1,
    total: 1.05,
  },
  {
    id: crypto.randomUUID(),
    goods: 'Awesomeness',
    quantity: 10,
    total: 100,
  },
  {
    id: crypto.randomUUID(),
    goods: 'Awesomeness',
    quantity: 3,
    total: 146,
  },
];

export function OrderList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-2xl">Orders</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Goods</th>
              <th>Quantity</th>
              <th>Total price</th>
              <th>Action</th>
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
                <td>
                  <button className="btn btn-xs">Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

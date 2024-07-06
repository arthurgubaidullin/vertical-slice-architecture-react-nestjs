type Order = Readonly<{
  id: string;
  goods: string;
  quantity: number;
  total: number;
}>;

type Notification = Readonly<{
  id: string;
  order: Order;
  type: string;
}>;

const notifications: ReadonlyArray<Notification> = [
  {
    id: crypto.randomUUID(),
    order: {
      id: crypto.randomUUID(),
      goods: 'Awesomeness',
      quantity: 1,
      total: 1.05,
    },
    type: 'order.accepted',
  },
  {
    id: crypto.randomUUID(),
    order: {
      id: crypto.randomUUID(),
      goods: 'Awesomeness',
      quantity: 10,
      total: 100,
    },
    type: 'order.rejected',
  },
];

function createUUIDPreview(uuid: string) {
  return `${uuid.slice(0, 4)}...${uuid.slice(-4)}`;
}

export function NotificationList() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-2xl">Notifications</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Order ID</th>
              <th>Total price</th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((notification, index) => (
              <tr key={notification.id} className={index % 2 ? 'hover' : ''}>
                <th>{createUUIDPreview(notification.id)}</th>
                <td>{createUUIDPreview(notification.order.id)}</td>
                <td>
                  {notification.type === 'order.accepted'
                    ? 'accepted'
                    : notification.type === 'order.rejected'
                    ? 'rejected'
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

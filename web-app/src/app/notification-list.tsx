import { UUIDPreview } from './uuid-preview';
import * as UUID from '@org/uuid-v4';

type Order = Readonly<{
  id: string;
}>;

type Notification = Readonly<{
  id: string;
  order: Order;
  type: string;
}>;

const notifications: ReadonlyArray<Notification> = [
  {
    id: UUID.randomUUID(),
    order: {
      id: UUID.randomUUID(),
    },
    type: 'order.accepted',
  },
  {
    id: UUID.randomUUID(),
    order: {
      id: UUID.randomUUID(),
    },
    type: 'order.rejected',
  },
];

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
                <th>
                  <UUIDPreview uuid={notification.id} />
                </th>
                <td>
                  <UUIDPreview uuid={notification.order.id} />
                </td>
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

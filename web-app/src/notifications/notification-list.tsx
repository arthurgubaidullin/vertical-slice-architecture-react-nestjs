import * as RD from '@devexperts/remote-data-ts';
import * as NotificationsClient from '@org/notifications-client-react';
import { UUIDPreview } from '@org/uuid-react';
import { pipe } from 'fp-ts/function';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

export const NotificationList = observer(() => {
  const notifications$ = useContext(NotificationsClient.Context);

  const rows = pipe(
    notifications$.list(),
    RD.fold3(
      () => null,
      (error) => {
        throw error;
      },
      (notifications) =>
        notifications.map((notification, index) => (
          <tr key={notification.id} className={index % 2 ? 'hover' : ''}>
            <th>
              <UUIDPreview uuid={notification.id} />
            </th>
            <td>
              <UUIDPreview uuid={notification.order.id} />
            </td>
            <td>{notification.type === 'order.created' ? 'Created' : ''}</td>
          </tr>
        ))
    )
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-2xl">Notifications</h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Order ID</th>
              <th>Event</th>
            </tr>
          </thead>

          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
});

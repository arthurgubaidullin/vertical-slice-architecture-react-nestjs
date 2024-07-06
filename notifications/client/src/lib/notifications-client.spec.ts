import { notificationsClient } from './notifications-client';

describe('notificationsClient', () => {
  it('should work', () => {
    expect(notificationsClient()).toEqual('notifications-client');
  });
});

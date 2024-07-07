import { persistedNotification } from './persisted-notification';

describe('persistedNotification', () => {
  it('should work', () => {
    expect(persistedNotification()).toEqual('persisted-notification');
  });
});

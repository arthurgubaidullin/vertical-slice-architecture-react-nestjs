import { uuidV4 } from './uuid-v4';

describe('uuidV4', () => {
  it('should work', () => {
    expect(uuidV4()).toEqual('uuid-v4');
  });
});

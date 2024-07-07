import { render } from '@testing-library/react';

import { UUIDPreview } from './uuid-preview';

describe('uuid-preview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UUIDPreview uuid="031ff571-6237-4e94-b88d-874ce72b0a4a" />
    );
    expect(baseElement).toBeTruthy();
  });
});

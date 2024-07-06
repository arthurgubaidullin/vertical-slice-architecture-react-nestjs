import * as SalesClient from '@org/sales-client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SalesClientProvider = SalesClient.context.Provider;

root.render(
  <StrictMode>
    <BrowserRouter>
      <SalesClientProvider value={SalesClient.create()}>
        <App />
      </SalesClientProvider>
    </BrowserRouter>
  </StrictMode>
);

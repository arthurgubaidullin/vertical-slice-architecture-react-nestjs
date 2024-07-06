import * as SalesClient from '@org/sales-client';
import * as OrdersClient from '@org/orders-client';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SalesClientProvider = SalesClient.context.Provider;

const ordersClient = OrdersClient.create();
const salesClient = SalesClient.create(ordersClient);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SalesClientProvider value={salesClient}>
        <App />
      </SalesClientProvider>
    </BrowserRouter>
  </StrictMode>
);

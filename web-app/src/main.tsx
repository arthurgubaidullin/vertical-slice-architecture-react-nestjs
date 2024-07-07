import * as SalesClient from '@org/sales-client-react';
import * as OrdersClient from '@org/orders-client-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const SalesClientProvider = SalesClient.Context.Provider;
const OrdersClientProvider = OrdersClient.Context.Provider;

const ordersClient = OrdersClient.create();
const salesClient = SalesClient.create(ordersClient);

root.render(
  <StrictMode>
    <BrowserRouter>
      <OrdersClientProvider value={ordersClient}>
        <SalesClientProvider value={salesClient}>
          <App />
        </SalesClientProvider>
      </OrdersClientProvider>
    </BrowserRouter>
  </StrictMode>
);

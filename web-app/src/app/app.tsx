import { Route, Routes } from 'react-router-dom';
import { NewOrderForm } from './new-order-form';

function OrderList() {
  return <div>order list</div>;
}

function NotificationList() {
  return <div>notification list</div>;
}

export function App() {
  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-flow-row grid-cols-4">
        <div className="p-4 col-span-1">
          <ul className="menu bg-base-200 rounded-box w-auto">
            <li>
              <h2 className="menu-title">Sales</h2>
              <ul>
                <li>
                  <a href={`/new_order_form/${crypto.randomUUID()}`}>
                    New Order Form
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Orders</h2>
              <ul>
                <li>
                  <a
                    href={`orders?key=${decodeURIComponent(
                      crypto.randomUUID()
                    )}`}
                  >
                    List
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Notifications</h2>
              <ul>
                <li>
                  <a
                    href={`notifications?key=${decodeURIComponent(
                      crypto.randomUUID()
                    )}`}
                  >
                    List
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-4 col-span-3">
          <Routes>
            <Route path="/new_order_form/:id" element={<NewOrderForm />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/notifications" element={<NotificationList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

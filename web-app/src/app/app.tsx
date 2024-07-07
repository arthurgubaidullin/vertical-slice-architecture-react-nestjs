import * as UUID from '@org/uuid-v4';
import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { NewOrderForm } from '../sales/new-order-form';
import { NotificationList } from '../notifications/notification-list';
import { OrderList } from '../orders/order-list';

const RedirectToNewOrderForm = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`/new_order_form/${UUID.randomUUID()}`);
  }, [navigate]);

  return null;
};

export function App() {
  const [newOrderFormId, setNewOrderFormId] = useState(UUID.randomUUID());

  return (
    <div className="container mx-auto my-4">
      <div className="grid grid-flow-row grid-cols-4">
        <div className="p-4 col-span-1">
          <ul className="menu bg-base-200 rounded-box w-auto">
            <li>
              <h2 className="menu-title">Sales</h2>
              <ul>
                <li>
                  <Link
                    to={`/new_order_form/${newOrderFormId}`}
                    onClick={() => {
                      setNewOrderFormId(UUID.randomUUID());
                    }}
                  >
                    New Order Form
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Orders</h2>
              <ul>
                <li>
                  <Link
                    to={`orders?key=${decodeURIComponent(UUID.randomUUID())}`}
                  >
                    List
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Notifications</h2>
              <ul>
                <li>
                  <Link
                    to={`notifications?key=${decodeURIComponent(
                      UUID.randomUUID()
                    )}`}
                  >
                    List
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-4 col-span-3">
          <Routes>
            <Route path="/" element={<RedirectToNewOrderForm />} />
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

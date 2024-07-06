import { NewOrderForm } from './new-order-form';

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
                  <a>New Order Form</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Orders</h2>
              <ul>
                <li>
                  <a>List</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="menu-title">Notifications</h2>
              <ul>
                <li>
                  <a>List</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="p-4 col-span-3">
          <NewOrderForm />
        </div>
      </div>
    </div>
  );
}

export default App;

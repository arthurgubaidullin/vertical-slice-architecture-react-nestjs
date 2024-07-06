function NewOrderForm() {
  return (
    <div>
      <h1 className="text-2xl">New Order Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What do you want to buy?</span>
            <span className="label-text-alt">Required</span>
          </div>
          <input
            type="text"
            placeholder="Awesomeness"
            className="input input-bordered w-full"
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">How much do you want to buy?</span>
            <span className="label-text-alt">Required</span>
          </div>
          <input
            type="number"
            placeholder="9999"
            min={1}
            step={1}
            className="input input-bordered w-full"
            required
          />
        </label>

        <div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">
                I accept all the rules of the service
              </span>
              <input type="checkbox" className="checkbox" required />
            </label>
          </div>
        </div>

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
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

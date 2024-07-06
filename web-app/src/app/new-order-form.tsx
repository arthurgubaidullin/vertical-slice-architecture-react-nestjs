export function NewOrderForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-2xl">New Order Form</h1>

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

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">How much do you want to pay?</span>
            <span className="label-text-alt">Required</span>
          </div>
          <input
            type="number"
            placeholder="100500"
            min={0.01}
            step={0.01}
            className="input input-bordered w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt">Total</span>
            <span className="label-text-alt">USD only</span>
          </div>
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

        <div>
          <input className="btn btn-primary" type="submit" />
        </div>
      </div>
    </form>
  );
}

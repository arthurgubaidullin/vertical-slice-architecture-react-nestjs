import { action, observable } from 'mobx';
import * as NewOrderForm from '@org/new-order-form';
import { constVoid, pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

export const createNewOrderForm = (id: string) => {
  const store = observable.box<NewOrderForm.NewOrderForm>(
    NewOrderForm.initial(id),
    { deep: false }
  );

  const change = action((data: Partial<NewOrderForm.NewOrderForm>): void =>
    pipe(
      store.get(),
      NewOrderForm.change(data),
      O.fold(constVoid, (a) => store.set(a))
    )
  );

  return {
    get: () => store.get(),
    change,
  };
};

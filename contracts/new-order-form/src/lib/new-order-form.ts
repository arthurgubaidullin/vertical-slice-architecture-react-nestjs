import { Eq as _Eq, struct } from 'fp-ts/Eq';
import { pipe } from 'fp-ts/function';
import { fromPredicate, Option } from 'fp-ts/Option';
import * as N from 'fp-ts/number';
import * as S from 'fp-ts/string';
import * as t from 'io-ts';

export type NewOrderForm = t.TypeOf<typeof NewOrderForm>;

export const NewOrderForm = t.readonly(
  t.strict({
    id: t.string,
    goods: t.string,
    quantity: t.number,
    total: t.number,
  })
);

export const initial = (id: string): NewOrderForm => ({
  id: id,
  goods: '',
  quantity: 0,
  total: 0,
});

export const Eq: _Eq<NewOrderForm> = struct<NewOrderForm>({
  id: S.Eq,
  goods: S.Eq,
  quantity: N.Eq,
  total: N.Eq,
});

export const change =
  (data: Partial<NewOrderForm>) =>
  (form: NewOrderForm): Option<NewOrderForm> =>
    pipe(
      {
        id: form.id,
        goods: data.goods ? data.goods : form.goods,
        quantity: data.quantity ? data.quantity : form.quantity,
        total: data.total ? data.total : form.total,
      },
      fromPredicate((changed) => !Eq.equals(form, changed))
    );

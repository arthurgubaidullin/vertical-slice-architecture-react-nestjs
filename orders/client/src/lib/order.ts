export type Order = Readonly<{
  id: string;
  goods: string;
  quantity: number;
  total: number;
}>;

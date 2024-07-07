import { createContext } from 'react';
import * as NotificationsStore from './notifications-store';

export const create = () => {
  const notifications$ = NotificationsStore.create();

  return {
    list: () => notifications$.get(),
  };
};

export const Context = createContext(create());

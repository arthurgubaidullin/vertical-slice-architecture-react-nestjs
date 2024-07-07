import { constVoid } from 'fp-ts/function';
import { createContext } from 'react';
import { create } from './sales-client';

export const Context = createContext(create({ add: constVoid }));

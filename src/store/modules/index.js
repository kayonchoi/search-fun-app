import { init } from '@rematch/core';
import { search } from './Search';

const store = init({
  models: {
    search: search
  }
});

export default store;

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import SearchInput from './view/search/SearchInput';
import GlobalStyle from './Styled';

import store from './store/modules/index';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <React.StrictMode>
      <SearchInput />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

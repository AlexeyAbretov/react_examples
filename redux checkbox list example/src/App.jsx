import React from 'react';
import { Provider } from 'react-redux';

import { CheckboxListContainer } from 'features';

import createStore from './store';

const store = createStore();

export const App = () => (
    <Provider store={store}>
        <CheckboxListContainer />
    </Provider>
)
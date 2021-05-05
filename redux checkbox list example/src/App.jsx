import React from 'react';
import { Provider } from 'react-redux';

import { CounterContainer, GroupListContainer } from 'features';

import createStore from './store';

const store = createStore();

export const App = () => (
    <Provider store={store}>
        <CounterContainer />
        <GroupListContainer />
    </Provider>
)
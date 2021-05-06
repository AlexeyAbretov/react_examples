import React from 'react';

import { Box } from './ui';

import {
    CounterChangeBgViaStateContainer,
    CounterChangeBgViaRefContainer,
    CounterChangeBgViaCSSTransitionContainer,
} from 'containers';

export const App = () => (<Box>
    <Box>Via state</Box>
    <CounterChangeBgViaStateContainer />
    <Box mt="20px">Via ref</Box>
    <CounterChangeBgViaRefContainer />

    <Box mt="20px">Via csstransition</Box>
    <CounterChangeBgViaCSSTransitionContainer />
</Box>)
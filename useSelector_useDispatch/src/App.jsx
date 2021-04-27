import { initFeatures } from 'features';
import { CounterContainer } from 'features/counter/containers/Counter';
import React, { useEffect } from 'react';

import { Box } from './ui';

export const App = () => {
    useEffect(() => {
        initFeatures();
    }, []);
    
    return (
        <Box>
            <CounterContainer />
        </Box>
    );
};
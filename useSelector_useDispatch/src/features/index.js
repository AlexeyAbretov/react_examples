import {
    sagaMiddleware,
} from 'store';

import counterSagas from './counter/store/sagas';

export const initFeatures = () => {
    sagaMiddleware.run(counterSagas);
}
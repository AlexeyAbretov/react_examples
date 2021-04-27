import { takeEvery } from 'redux-saga/effects';

import {
    actions,
} from './reducer';

function* counterSagas() {
    console.log(actions.increment.toString());

    yield takeEvery(
        actions.increment.toString(),
        function* increment() {
            yield console.log('increment');
        }
    );
}

export default counterSagas;

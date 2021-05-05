import { combineReducers } from 'redux';

import { reducer } from 'features/Counter/store/reducer';
import { reducer as checkboxlist} from 'features/CheckboxList/store/reducer';

export default () => combineReducers({
    counter: reducer,
    checkboxlist,
});
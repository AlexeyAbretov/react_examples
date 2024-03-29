import { createSymbiote } from 'redux-symbiote';

import { initialState } from "./initialState";

const symbiotes = {
  load: (state, { items = [] } = {}) => ({
    ...state,
    items,
  }),
  checked: {
    set: (state, { id } = {}) => {
        const checked = state.checked.includes(id)
            ? state.checked.filter((x) => x !== id)
            : [...state.checked, id];

        return {
            ...state,
            checked,
        }
    }
  }
};

export const {
  actions,
  reducer,
} = createSymbiote(
  initialState,
  symbiotes,
  'checkboxlist',
);
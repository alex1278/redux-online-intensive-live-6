// Core
import { createStore } from 'redux';

// Root reducer
import { rootReducer } from '../reducers/rootReducer';

export const store = createStore(rootReducer);

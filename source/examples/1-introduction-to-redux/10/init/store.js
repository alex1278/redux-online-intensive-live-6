// Core
import { createStore } from 'redux';

// Root reducer
import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer);

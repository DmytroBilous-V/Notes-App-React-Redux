import { compose, createStore } from 'redux';
import rootReducer from '../redux';

const composeEnhancers = process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null
        || compose;

const store = createStore(
    rootReducer,
    composeEnhancers()
);


export default store;

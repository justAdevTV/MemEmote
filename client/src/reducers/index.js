import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import cloudImage from './cloudImage';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    cloudImage: cloudImage,
    cardReducers: cardReducer
});

const store = createStore(rootReducer);
export default rootReducer;
import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import cloudImage from './cloudImage';

const rootReducer = combineReducers({
    auth: authReducer,
    cloudImage: cloudImage
});

const store = createStore(rootReducer);
export default rootReducer;
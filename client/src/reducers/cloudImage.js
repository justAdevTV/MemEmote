import {SEND_EMOTION_PICTURE} from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SEND_EMOTION_PICTURE:
            return action.payload || false;
        default:
            return state;
    }
}
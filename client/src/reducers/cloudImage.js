import {SEND_EMOTION_PICTURE} from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case SEND_EMOTION_PICTURE:
            setTimeout(function() { //Start the timer
                window.location.reload(); 
            }.bind(this), 7000);
            return action.payload || false;
        default:
            return state;
    }
}
import _ from 'lodash';
import { FETCH_CARDS, FETCH_CARD, DELETE_CARD } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {
        case DELETE_CARD: 
            return action.payload || false;
        case FETCH_CARD:
            return action.payload || false;
        case FETCH_CARDS:
            return action.payload || false;
        default: 
            return state;
    }
}
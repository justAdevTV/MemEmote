import _ from 'lodash';
import { FETCH_CARDS, FETCH_CARD, DELETE_CARD } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case DELETE_CARD: 
        return _.omit(state, action.payload);

    case FETCH_CARD:
        return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_CARDS:
        return _.mapKeys(action.payload.data, 'id');
    default: 
        return state;
    }
}
import axios from 'axios';
import { 
    FETCH_USER,
    FETCH_CARDS,
    FETCH_CARD,
    CREATE_CARD,
    DELETE_CARD
} from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export function fetchCards() {
    const request = axios.get('/api/cards');
    return {
        type: FETCH_CARDS,
        payload: request
    };
}

export function createCard(values, callback) {
    const request = axios.post('/api/cards', values)
    .then(() => callback());

    return {
        type: CREATE_CARD,
        payload: request
    };
}

export function fetchCard(id) {
    const request = axios.get(`/api/card/${id}`);

    return {
        type: FETCH_CARD,
        payload: request
    };
}

export function deleteCard(id, callback) {
    const request = axios.delete(`/api/card/${id}`)
        .then(() => callback());

    return {
        type: DELETE_CARD,
        payload: id
    };
}
import axios from 'axios';
import { 
    FETCH_USER,
    FETCH_CARDS,
    FETCH_USER_CARDS,
    FETCH_USER_REACTED_CARDS,
    FETCH_CARD,
    CREATE_CARD,
    DELETE_CARD,
    SEND_EMOTION_PICTURE
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
};

export function fetchUserCards() {
    const request = axios.get('/api/current_user/cards');
    return {
        type: FETCH_USER_CARDS,
        payload: request
    };
};

export function fetchUserReactedCards() {
    const request = axios.get('/api/user_reacted_cards');
    return {
        type: FETCH_USER_REACTED_CARDS,
        payload: request
    }
}

export function createCard(values, callback) {
    const request = axios.post('/api/cards', values)
    .then(() => callback());

    return {
        type: CREATE_CARD,
        payload: request
    };
};

export function fetchCard(id) {
    const request = axios.get(`/api/card/${id}`);

    return {
        type: FETCH_CARD,
        payload: request
    };
};

export function deleteCard(id, callback) {
    const request = axios.delete(`/api/card/${id}`)
        .then(() => callback());

    return {
        type: DELETE_CARD,
        payload: id
    };
};

export const sendEmotion = (_id, picture) => async dispatch => {
    const res = await axios.post('/api/vision_test', {_id, picture});

    dispatch({
        type: SEND_EMOTION_PICTURE,
        payload: res.data
    });

};
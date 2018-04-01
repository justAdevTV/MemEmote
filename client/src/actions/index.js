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

export const fetchCard = (id) => async dispatch => {
    const request = await axios.get(`/api/card/${id}`);

    dispatch({
        type: FETCH_CARD,
        payload: request.data
    });
};

export const fetchCards = () => async dispatch => {
    const request = await axios.get('/api/cards');

    dispatch({
        type: FETCH_CARDS,
        payload: request.data
    });
};

export const fetchUserCards = () => async dispatch =>{
    const request = axios.get('/api/current_user/cards');
    
    dispatch({
        type: FETCH_USER_CARDS,
        payload: request
    });
};

export const fetchUserReactedCards = () => async dispatch => {
    const request = axios.get('/api/user_reacted_cards');
    
    dispatch({
        type: FETCH_USER_REACTED_CARDS,
        payload: request
    });
}

export const createCard = (values, callback) => async dispatch => {
    const res = await axios.post('/api/cards', values)

    dispatch({
        type: CREATE_CARD,
        payload: res.data
    });
};

export const deleteCard = (id, callback) => async dispatch => {
    const request = axios.delete(`/api/card/${id}`)
        .then(() => callback());

    dispatch({
        type: DELETE_CARD,
        payload: id
    });
};

export const sendEmotion = (_id, picture) => async dispatch => {
    const res = await axios.post('/api/vision_test', {_id, picture});

    dispatch({
        type: SEND_EMOTION_PICTURE,
        payload: res.data
    });

};
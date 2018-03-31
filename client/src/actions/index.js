import axios from 'axios';
import { FETCH_USER, SEND_EMOTION_PICTURE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const sendEmotion = (_id, picture) => async dispatch => {
    const res = await axios.post('/api/vision_test', {_id, picture});

    dispatch({
        type: SEND_EMOTION_PICTURE,
        payload: res.data
    });

};
import axios from '../../axios';
import { ALL_MOVIES, LEADERBOARD, GENRES, LANGUAGES, GENRE_SELECTED, LANGUAGE_SELECTED, DELETE_MOVIE, ADD_MOVIE, VOTE } from './types'

export const getPreferences = (data, callback) => async dispatch => {
    try {
        let response = await axios.get('/movies/preferences');
        if (response.status) {
            dispatch({ type: GENRES, payload: response.data.genres })
            dispatch({ type: LANGUAGES, payload: response.data.languages })
            callback(response.data)
        }
    } catch (error) { }
}

export const setPreferences = (data, callback) => async dispatch => {
    try {
        dispatch({ type: GENRE_SELECTED, payload: data.genre })
        dispatch({ type: LANGUAGE_SELECTED, payload: data.language })
        callback(null)
    } catch (error) { }
}
export const addMovie = () => async dispatch => {
    try {
        dispatch({ type: ADD_MOVIE, payload: null });
    } catch (error) { }
}


export const getMovies = (data, callback) => async dispatch => {
    try {
        let response = await axios.get('/movies/all', { params: data });
        if (response.status) {
            dispatch({ type: ALL_MOVIES, payload: response.data.movies })
            callback(null)
        }
    } catch (error) { }
}
export const getLeaderBoard = (data, callback) => async dispatch => {
    try {
        let response = await axios.get('/movies/leaderboard', { params: data });
        if (response.status) {
            dispatch({ type: LEADERBOARD, payload: response.data.movies })
            callback(response.data)
        }
    } catch (error) { }
}
export const voteMovie = (id) => async dispatch => {
    try {
        dispatch({ type: VOTE, payload: false });
        let response = await axios.post(`/movies/${id}/vote`);
        if (response.status) {
            dispatch({ type: DELETE_MOVIE, payload: id });
            dispatch({ type: ADD_MOVIE, payload: null });
            dispatch({ type: VOTE, payload: true });
        }
    } catch (error) { }
}
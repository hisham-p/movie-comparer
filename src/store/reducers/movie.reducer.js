import { ALL_MOVIES, LEADERBOARD, GENRES, LANGUAGES, GENRE_SELECTED, LANGUAGE_SELECTED, DELETE_MOVIE, ADD_MOVIE, VOTE } from '../actions/types';
const initialState = {
    allMovies: [],
    compareMovies: [],
    leaderboard: [],
    genres: [],
    languages: [],
    genreSelected: '',
    languageSelected: '',
    voteEnable: true
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_MOVIES:
            return {
                ...state,
                allMovies: action.payload,
                compareMovies: action.payload.slice(0, 2)
            }
        case LEADERBOARD:
            return {
                ...state,
                leaderboard: action.payload
            }
        case GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case LANGUAGES:
            return {
                ...state,
                languages: action.payload
            }
        case GENRE_SELECTED:
            return {
                ...state,
                genreSelected: action.payload
            }
        case LANGUAGE_SELECTED:
            return {
                ...state,
                languageSelected: action.payload
            }
        case DELETE_MOVIE:
            return {
                ...state,
                compareMovies: state.compareMovies.filter(movie => action.payload !== movie.id),
            }
        case ADD_MOVIE:
            return {
                ...state,
                compareMovies: state.compareMovies.concat(state.allMovies[Math.floor(Math.random() * state.allMovies.length)])
            }
        case VOTE:
            return {
                ...state,
                voteEnable: action.payload
            }
        default:
            return state
    }
}

export default movieReducer;
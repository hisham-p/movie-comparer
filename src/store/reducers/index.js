import { combineReducers } from 'redux'
import movieReducer from './movie.reducer';
import { reducer as formReducer } from "redux-form";
export default combineReducers({
    form: formReducer,
    movieReducer
})
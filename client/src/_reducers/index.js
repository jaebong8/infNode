import { combineReducers} from 'redux';
import user from './user.reducer'
// import comment from './comment_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;
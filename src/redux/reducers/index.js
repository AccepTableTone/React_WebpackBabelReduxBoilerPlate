import { combineReducers } from 'redux';
import TmpReducer from './reducer';

const rootReducer = combineReducers({
	tmpholder: TmpReducer
});

export default rootReducer;

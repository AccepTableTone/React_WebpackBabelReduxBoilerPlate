import * as CONSTS from '../../config/constants';
import initialstate from '../../config/initialstate';

export default function(state = initialstate, action) {
	switch (action.type) {
		case CONSTS.ACTIONTYPE_ISLOADING:
			return {
				...state,
				isLoading: true,
				hasError: false,
				errorMessage: ''
			};
		case CONSTS.ACTIONTYPE_HASERROR:
			return {
				...state,
				isLoading: false,
				hasError: true,
				errorMessage: action.errorMessage
			};
		default:
			return state;
	}
}

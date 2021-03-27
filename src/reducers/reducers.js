import {
	ADD_ITEM,
	DELETE_ITEM,
	EDIT_ITEM_STATE,
	FILTER_ITEM,
} from "../constants/constants";

const reducers = (state = [], action) => {
	switch (action.type) {
		case ADD_ITEM:
			return [...state, action.payload];
		case DELETE_ITEM:
			return state.filter((currentElt) => currentElt.id !== action.payload);
		case EDIT_ITEM_STATE:
			return state.map((currentElt) =>
				currentElt.id === action.payload
					? { ...currentElt, isDone: !currentElt.isDone }
					: currentElt
			);
		case FILTER_ITEM:
			return state.map((currentElt) => currentElt.isDone === action.payload);
		default:
			return state;
	}
};

export default reducers;

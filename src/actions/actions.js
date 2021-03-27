import {
	ADD_ITEM,
	DELETE_ITEM,
	EDIT_ITEM_STATE,
	FILTER_ITEM,
} from "../constants/constants";

export const addNewItem = (newItem) => {
	return {
		type: ADD_ITEM,
		payload: newItem,
	};
};

export const deleteItem = (itemID) => {
	return {
		type: DELETE_ITEM,
		payload: itemID,
	};
};

export const editItemState = (itemID) => {
	return {
		type: EDIT_ITEM_STATE,
		payload: itemID,
	};
};

export const filterItem = (filter) => {
	return {
		type: FILTER_ITEM,
		payload: filter,
	};
};

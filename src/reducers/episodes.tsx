import { types } from "../actions";

const initialState = {
	episodeList: [],
	inputValue: "",
	index: []
};

export const episodes = (state = initialState, action: any) => {
	switch (action.type) {
		case types.GET_DATA: {
			return {
				...state,
				episodeList: action.data
			};
		}

		case types.GET_INPUT_VALUE: {
			return {
				...state,
			};
		}

		case types.GET_EPISODE: {
			return {
				...state,
				episodeData: action.data
			};
		}

		default:
			return state;
	}
};

export default episodes;
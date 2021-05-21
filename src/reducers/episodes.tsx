import { types } from "../actions";

const initialState = {
	episodeLoaded: false,
	episodeList: [],
	inputValue: "",
	scrollTrigger: true,
	checkScollYTrigger: false,
	index: []
};

export const episodes = (state = initialState, action: any) => {
	switch (action.type) {
		case types.GET_DATA: {
			return {
				...state,
				episodeList: action.data,
				episodeLoaded: true,
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

		case types.GET_SCROLL_Y: {
			return {
				...state,
				scrollTrigger: action.trigger
			};
		}

		case types.GET_CHECK_SCROLL_Y: {
			return {
				...state,
				checkScollYTrigger: action.checkScrollY,
			};
		}

		default:
			return state;
	}
};

export default episodes;
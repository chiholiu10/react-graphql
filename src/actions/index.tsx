import { CharacterData, CharacterDetail, SearchInputProps, Trigger } from '../types/types';

export const types = {
  GET_DATA: "GET_DATA",
  GET_INPUT_VALUE: "GET_INPUT_VALUE",
  GET_EPISODE: "GET_EPISODE",
  GET_SCROLL_Y: "GET_SCROLL_Y",
  GET_CHECK_SCROLL_Y: "GET_CHECK_SCROLL_Y"
};

export const getData = (data: CharacterData) => ({
  type: types.GET_DATA,
  data
});

export const getEpisode = (data: CharacterDetail) => ({
  type: types.GET_EPISODE,
  data
});

export const getInput = (value: SearchInputProps) => ({
  type: types.GET_INPUT_VALUE,
  value
});

export const getScrollY = (trigger: Trigger) => ({
  type: types.GET_SCROLL_Y,
  trigger
});

export const getScrollYTrigger = (checkScrollY: boolean) => ({
  type: types.GET_CHECK_SCROLL_Y,
  checkScrollY
});




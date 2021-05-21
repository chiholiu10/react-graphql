export const types = {
  GET_DATA: "GET_DATA",
  GET_INPUT_VALUE: "GET_INPUT_VALUE",
  GET_EPISODE: "GET_EPISODE",
  GET_SCROLL_Y: "GET_SCROLL_Y",
  GET_CHECK_SCROLL_Y: "GET_CHECK_SCROLL_Y"
};

export const getData = (data: any) => {
  return {
    type: types.GET_DATA,
    data
  };
};

export const getEpisode = (data: any) => {
  return {
    type: types.GET_EPISODE,
    data
  };
};

export const getInput = (value: string) => {
  return {
    type: types.GET_INPUT_VALUE,
    value
  };
};

export const getScrollY = (trigger: boolean) => {
  return {
    type: types.GET_SCROLL_Y,
    trigger
  };
};

export const getScrollYTrigger = (checkScrollY: any) => {
  return {
    type: types.GET_CHECK_SCROLL_Y,
    checkScrollY
  };
};




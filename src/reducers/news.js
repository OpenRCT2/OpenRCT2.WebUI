const defaultState = {
  items: [],
  hasFetched: false,
  isFetching: false
};

const initialState = (() => {
  const news = localStorage['news'];
  if (news) {
    try {
      const saved = JSON.parse(news);
      if (Array.isArray(saved.items)) {
        return { ...defaultState, items: saved.items };
      }
    } catch (e) { }
  }
  return defaultState;
})();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, isFetching: true };
    case 'FETCH_NEWS_SUCCESS':
      const items = action.response;
      localStorage['news'] = JSON.stringify({ items });
      return { hasFetched: true, isFetching: false, items };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default reducer;

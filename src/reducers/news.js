const initialState = (() => {
  const news = localStorage['news'];
  if (news) {
    try {
      return JSON.parse(news);
    } catch (e) { }
  }
  return {
    items: []
  };
})();

export const news = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { isFetching: true, ...state };
    case 'FETCH_NEWS_SUCCESS':
      const items = action.response;
      localStorage['news'] = JSON.stringify({ items });
      return { hasFetched: true, items };
    case 'FETCH_NEWS_FAILURE':
      return { isFetching: false, ...state };
    default:
      return state;
  }
};

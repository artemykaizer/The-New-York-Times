const initialState = {
    news: [],
    isFetching: false
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case "REQUEST_START": 
            return {...state, isFetching: true}
        case "SET_NEWS": 
            return {...state, news: action.news, isFetching: false}
        default: 
            return state
    }
}

export default reducer
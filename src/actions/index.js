import axios from 'axios'
import {MAIN_URL, API_KEY} from '../constants/index'


export function setNews (news) {
    return {
        type: "SET_NEWS",
        news
    }
}

export function getNews (query) {
    if(query==="/") query="/home"
    return dispatch => {
        dispatch({
            type: "REQUEST_START"
        })
        axios.get(`${MAIN_URL}${query}.json?api-key=${API_KEY}`)
        .then(res => dispatch(setNews(res.data.results)))
    }
}
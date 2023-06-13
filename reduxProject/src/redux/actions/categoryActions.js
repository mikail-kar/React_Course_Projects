import * as actionTypes from './ActionTypes'

export function changeCategory (category) {
    return { type: actionTypes.CATEGORY_CHANGE, payload: category}
}

export function getCategorySuccess (categories) {
    return { type: actionTypes.GET_CATEGORY_SUCCESS, payload: categories}
}

export function getCategory (categories) {
    return function (dispatch) {
        let url = "https://api.collectapi.com/news/getNews?country=tr&tag=general%22"
            fetch(url,
                {"headers":{"content-type": "application/json", 
                "authorization": "apikey 4HmzuVhw9P1Gt4Jkr1FtCx:7CFt8nlfCxOd4ccsgitv6F"}})
                .then((response) => response.json())
                .then((result) =>{
                    source = result.map((categories) => (
                        categories.source
                    ))
                    dispatch(getCategorySuccess(source))})
    }
}
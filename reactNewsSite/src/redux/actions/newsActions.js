import * as actionTypes from './ActionTypes'

export function getNewsSuccess(news) {
    return { type: actionTypes.GET_NEWS_SUCCESS, payload:news}
}

export function getNews(source="") {
    let url="https://api.collectapi.com/news/getNews?country=tr&tag=general"
   
    return function (dispatch) {
        fetch(url,
        {"headers":{"content-type": "application/json",
        "authorization": "apikey 4HmzuVhw9P1Gt4Jkr1FtCx:7CFt8nlfCxOd4ccsgitv6F"}})
        .then((response)=>response.json())
            .then((result) =>{ 
                console.log(result)
                var data=result.result
                if(source!=="")
                data=result.result.filter(x=>x.source===source)
                dispatch(getNewsSuccess(data))})
    }
}
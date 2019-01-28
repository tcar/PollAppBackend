
import axios from "axios"


export function register(data){

    return async dispatch =>{
        postData(dispatch, "REGISTER", "/register", data)
    }
}

export function login(data){

    return async dispatch =>{
        postData(dispatch, "LOGIN", "/login", data)
    }
}

export function createPoll(data){

    return async dispatch =>{
        postData(dispatch, "CREATE_POLL", "/create", data)
    }
}

export function vote(data){

    return async dispatch =>{
        postData(dispatch, "VOTED", "/vote", data)
    }
}

export function getMyPolls(){

    return async dispatch =>{
        getData(dispatch, "GET_MY_POLLS", "/myPolls")
    }
}


//HELPER FUNCTIONS
async function postData(dispatch, type, url, data)
{
    const res = await axios({
        method:"post",
        url,
        data
    })
    dispatch({type, payload: res.data})
}


async function getData(dispatch, type, url)
{
    const res = await axios({
        method:"get",
        url,
    })
    dispatch({type, payload: res.data})
}
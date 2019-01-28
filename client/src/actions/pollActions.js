
import axios from "axios"

export function getAllPolls(){

    return async dispatch =>{
        getData(dispatch, "GET_ALL_POLLS", "/poll/getAll")
    }
}

export function getOne(id){

    return async dispatch =>{
        getData(dispatch, "GET_ONE_POLL", `/poll/getOne/${id}`)
    }
}

async function getData(dispatch, type, url)
{
    const res = await axios({
        method:"get",
        url,
    })
    dispatch({type, payload: res.data})
}
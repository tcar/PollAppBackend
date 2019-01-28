export default function pollReducer(state={
    polls:[],
    mymypolls:[],

},action){
    switch(action.type){
        case 'SEARCH_POLLS':{
            return{
                
            }
        }

        default:
        return state
    }

}
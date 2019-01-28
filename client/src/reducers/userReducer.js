export default function userReducer(state={

    },action){
        switch(action.type){
            case 'LOGIN':{
                console.log("login")
            }

            default:
            return state
        }
    
    }
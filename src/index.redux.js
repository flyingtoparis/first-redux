const ADD = 'add'
const REMOVE = 're'

//reducer
export function counter(state=0,action){
    switch(action.type){
        case ADD:
            return state + 1
        case REMOVE:
            return state -1
        default:
            return 10
    }
}


//action creator
export function addGUN(){
    return {type:ADD}
}

export function reGUN(){
    return {type:REMOVE}
}

export function addGunAsync(){
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addGUN())
        },2000)
    }
}
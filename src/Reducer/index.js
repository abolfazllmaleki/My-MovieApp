import inc from '../actions'


const initialState = {page:1}
 
 
export const PageReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'INC':

            return {page:state.page + 1}

        case 'DEC':

            return {page:state.page - 1 }
        case 'REST':
            return {page:1}
    
    
        default:
            return state

    }
}

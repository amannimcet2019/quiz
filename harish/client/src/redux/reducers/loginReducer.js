const initialState={
    active:"NO ONE IS ACTIVE"
}

export const featureKey = "loginState"

export const loginReducer = ( state = initialState , action ) => {
    switch(action.type){

        case "USERLOGIN" : return {
            active : action.payload
        }

        case "NOLOGIN"   : return {
            active : action.payload
        }

        default : return state;
    }
}
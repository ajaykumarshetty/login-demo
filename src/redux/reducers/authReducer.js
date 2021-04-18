import { ISLOGIN_ERROR, ISLOGIN_SUCCESS, ISLOGIN_LOADING } from "../constants/index"

const initialState = {
    isLoading: false,
    isLoginSuccess: false,
    isError: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ISLOGIN_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case ISLOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.payload
            }
        case ISLOGIN_ERROR:
            return {
                ...state,
                isError: action.payload
            }

        default:
            return state
    }
}

export default authReducer
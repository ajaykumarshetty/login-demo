import { ISLOGIN_ERROR, ISLOGIN_SUCCESS, ISLOGIN_LOADING } from "../constants/index"

function isLoginLoading(state) {
    return {
        type: ISLOGIN_LOADING,
        payload: state
    }
}
function isLoginSuccess(state) {
    return {
        type: ISLOGIN_SUCCESS,
        payload: state
    }
}
export function isLoginError(error) {
    return {
        type: ISLOGIN_ERROR,
        payload: error
    }
}


export function onLogin(userData ,props) {
    console.log("userData", userData)
    return async function (dispatch) {
        dispatch(isLoginLoading(true))
        if (userData.userName === "hruday@gmail.com" && userData.passWord === "hruday123") {
            localStorage.setItem("isLogin",true)
            dispatch(isLoginSuccess(true))
            dispatch(isLoginError(""))
            dispatch(isLoginLoading(false))
            props.history.push('/employee')
        } else {
            dispatch(isLoginError("Please enter valid credentials"));
            dispatch(isLoginLoading(false))
        }
    }
}
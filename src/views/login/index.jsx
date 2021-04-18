import { useState , useRef, useEffect} from "react";
import { connect } from "react-redux";

import { onLogin, isLoginError } from "../../redux/actions/authAction";
import "../../assests/css/home.css";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const { isError } = props;

  const handleLogin = () => {
    if (!userName || !passWord) {
      return props.isLoginError("Please enter all fields");
    }

    let userData = {
      userName,
      passWord,
    };
    props.onLogin(userData, props);
  };

  return (
    <div className="login">
      <div className="login-container">
        {isError && <p className="text-danger text-center">{isError}</p>}
        <div>
          <label>Username</label>
          <div>
            <input
            ref={inputRef}
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("statee", state);
  return {
    isError: state.authReducer.isError,
    isLoading: state.authReducer.isLoading,
    isLoginSuccess: state.authReducer.isLoginSuccess,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    onLogin: (data, propsData) => dispatch(onLogin(data, propsData)),
    isLoginError: (err) => dispatch(isLoginError(err)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Login);

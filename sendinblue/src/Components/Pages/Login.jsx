import "../Pages/Login.css";

import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";

function Login() {
  return (
    <div className="login">
      <Image
        style={{ marginTop: "100px" }}
        width="400px"
        src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
        alt="Logo"
      ></Image>
      <div className="form">
        <form>
          <h1>Log In</h1>
          <label>Email</label>
          <br></br>
          <input type="email"></input>
          <br />
          <label>Password</label>
          <br></br>
          <input type="password"></input>
          
          <input type="submit" value="Log in"></input> 

          <div>
            <div>
                <img src="" alt=""></img>
            </div>
          </div>
          
        </form>
      
      </div>
     
    </div>
  );
}
export default Login;

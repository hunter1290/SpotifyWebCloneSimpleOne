import React from 'react';
import './Login.css';
import {loginUrl} from "./spotify";//we link js file with button

function Login() {
    return (
        <div class="login">
            {/*Spotify Logo */}
            
           
            <img src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Here is our logo"></img>
            
              {/* LOgin with spotify button*/}
              <button><a href={loginUrl}>LOGIN WITH SPOTIFY</a></button>
              

        </div>
    )
}

export default Login
{/*Spotify Logo */}
{/* */}
import { Badge } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Sawo from 'sawo'

function Login() {
    // eslint-disable-next-line
    const[userPayload, setuserPayload] = useState({});
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    <script src="http://websdk.sawolabs.com/sawo.min.js"></script>
    useEffect(() => {
      const onSuccessLogin = async(payload) =>   {
          setuserPayload(payload);
          setIsLoggedIn(true);
          sessionStorage.setItem("user_id", payload.user_id);
          console.log("Payload Object: ", payload);
      };
      const sawoConfig = {
          containerID: "sawo-container",
          identifierType: "email",
          apiKey: "b3a8fb1f-08f7-45d2-a668-2a7d8dbe58f0",
          onSuccess: onSuccessLogin,
      };
      let sawo = new Sawo(sawoConfig);
      sawo.showForm();
    }, [])
    return (   
        <div className="homemain">    
        <React.Fragment>
            {!isLoggedIn && (
                <div className="jumbotron-fluid loginPage">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 mt-5 d-flex flex-column justify-content-center">
                            <div id="sawo-container" className="border bg-white" style={{height: "60vh", width: "100%", margin: "auto", padding:"8% 15%", opacity:'0.7', borderRadius: '10px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>                
            )}
            {isLoggedIn && (
                <div style={{ display:"flex", justifyContent:"center", alignItems:"center", width:"500px", margin: "auto"}}>
                    <Badge>Yayy! Logged in</Badge>
                </div>
            )}
        </React.Fragment>
        </div>
    )
}

export default Login

import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";

export const MyBooking = () => {
    const[value,setvalue]=useState()
  const click = () => {};

  return (
     <> 
  <div>
      <div class="for_login">
          <div class="button_log">
              <div id="bunt"></div>

              <button type="button" onclick="Log_In()" class="btn_log">Log In</button>
              <button type="button" onclick="register()" class="btn_log">Register</button>

          </div>
          <div id="loIn" class="inputs">
              
              <input id="Em" type="email" class="inside_input" placeholder="Email" required/>
                  <input id="Pass" type="password" class="inside_input" placeholder="password" required/>
                
                          <button id="log" type="submit" class="sub_btn">Log In</button>

            </div>
                      <div id="rig" class="input_rig">
                          <input type="email" id="email1" class="inside_input" placeholder="Email" required/>
                  <input type="password" id="pass1" class="inside_input" placeholder="Password" required/>
          <input type="password" id="pass2" class="inside_input" placeholder="Rest_Password" required/>
          <button type="submit" id="regs" class="sub_btn">Register</button>
       </div>
        
  </div>
  </div>
  </> 
  );
}

import { Button, Card, Input,message } from "antd";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserEmail,setUserId,setUserName } from "../store/userSlice";

function Signin() {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [inputUsername, setInputUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [wrongCredentials,setWrongCredentials] = useState(false);


    useEffect(()=>{
      async function isAuthenticated() {
        try {
          const token=Cookies.get('token');
          const response = await axios.get("http://localhost:3001/authservice/api/v1/isAuthenticated",{
            headers: {
              Authorization:`Bearer ${token}`
            }
          });
          if(response.data.success === true) {
            dispatch(setUserEmail(response.data.data.email));
            dispatch(setUserId(response.data.data.id));
            dispatch(setUserName(response.data.data.name));
            navigate('/');
          }
        } catch (error) {
          console.log(error);
          navigate('/signin');
        }
      }
      isAuthenticated();
    },[dispatch,navigate])
    async function authenticate(e) {
        try {
            e.preventDefault();
            setLoader(true);
            setWrongCredentials(false);
            const user = {
                email:inputUsername,
                password:password
            }
            let userDetails = new URLSearchParams(Object.entries(user)).toString();
            let data = await axios.post("http://localhost:3001/authservice/api/v1/login",userDetails,{
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            data=data.data.data;
            //Http Only Cookie
            Cookies.set('token',data.token,{expires:1/12,secure:true});
            dispatch(setUserEmail(data.email)); 
            dispatch(setUserName(data.name)); 
            dispatch(setUserId(data.id)); 
            await message.open({
              type: 'success',
              content: 'Successfully Signed In',
              time:2
          });
            navigate('/');
        } catch (error) {
            setLoader(false);
            setWrongCredentials(true);
            console.log(error);
        }
    }
    const formValidation = () => {
        return inputUsername === '' || password === '';
    };
  return (
    <div>
      <div className="px-3 sm:px-0 w-screen h-screen flex justify-center items-center">
        <Card className="bg-slate-100login-card w-[384px] shadow-2xl">
          <div className="flex justify-center text-black-100 w-auto h-auto font-poppins font-bold text-xl leading-6 tracking-[0.01em] w-24px pt-6 ">
            Signin to Job-Portal
          </div>
          <form
            className="px-6 mt-6"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                authenticate(e);
              }
            }}
          >
            <div className="flex justify-center">
              <Input
                placeholder={"Enter Email Id"}
                type={"text"}
                value={inputUsername}
                onChange={(e) => setInputUserName(e.target.value)}
                className="inline-block px-4 py-2 text-primary-200 font-poppins border-[#000000A8] border-2 text-sm"
              />
            </div>
            {/* //TODO View password is missing */}
            <div className="flex justify-center pt-4">
              <Input
                placeholder={"Enter Password"}
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
                className="inline-block pl-4 pr-2 py-2 font-poppins border-[#000000A8] border-2 text-sm"
              />
            </div>
          </form>
          {wrongCredentials && (
            <div className="flex justify-center items-center text-sm font-poppins tracking-[0.01em] pt-4 leading-5 font-medium text-[#8C2A20]">
              Oops! You have entered invalid credentials
            </div>
          )}

          <div className="flex justify-center pt-6">
            <Button
              htmlType="submit"
              loading={loader}
              disabled={formValidation()}
              onClick={(e) => authenticate(e)}
              className="bg-[#000B80] px-10 font-poppins text-sm font-semibold tracking-[0.03em] leading-6 text-white-100 login-login-button"
            >Sign in</Button>
          </div>
          <div className="flex justify-center font-poppins text-sm font-medium leading-5 pt-6 tracking-[0.01em] text-primary-200">
            <p>
              Don&apos;t have an Account?{" "}
              <a
                href="/signup"
                className="text-center no-underline text-primary-100 text-sm font-bold"
              >
                Create new.
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signin;

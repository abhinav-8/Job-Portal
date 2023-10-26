import { Button, Card , message} from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {  useDispatch } from "react-redux";
import { setUserId, setUserName } from "../store/userSlice";

function Job() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [userId, setUserID] = useState("");
  const [jobData, setJobData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function isAuthenticated() {
      try {
        const token = Cookies.get("token");
        const response = await axios.get(
          "http://localhost:3001/authservice/api/v1/isAuthenticated",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.data.success === true) {
          setUsername(response.data.data.name);
          setUserID(response.data.data.id);
          dispatch(setUserName(username));
          dispatch(setUserId(userId));
          let data = await axios.get(
            "http://localhost:3000/jobservice/api/v1/jobs"
          );
          console.log("data", data);
          setJobData(data.data.data);
        }
        else navigate("/signup"); 
      } catch (error) {
        console.log(error);
        navigate("/signup");
      }
    }
    isAuthenticated();
  }, []);

  async function checkApplied(e,jobId){
    try {
      e.preventDefault();
      let data = await axios.get(`http://localhost:3002/applicationservice/api/v1/applied/${userId}/${jobId}`);
      if(data.data.data === true){
        await message.open({
          type: 'info',
          content: 'You have already applied to this job',
          time:2
        });
      }
      else{
        navigate(`/jobs/${jobId}`)
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <div>
      <div className="mt-10 w-screen text-center font-semibold text-black text-2xl">
        Hello {username} 👋
      </div>
      <div className="px-3 sm:px-0 w-screen mt-20 mb-20 h-screen flex justify-center items-center">
        <Card className="bg-slate-100 w-1/2 shadow-2xl">
          {jobData.map((value, index) => {
            let company = value.Company.name;
            let jobId = value.id;
            let title = value.title;
            let experience = value.experience;
            return (
              <Card className="bg-white-100">
                <div className="flex items-center">
                  <div className="text-black w-[30%] font-bold text-xl">
                    {company}
                  </div>
                  <div className="flex flex-col w-[50%] items-start">
                    <div className="text-black text-lg">{title}</div>
                    <div className="text-slate-700 text-lg24">{experience}</div>
                  </div>
                  <div className="w-[20%]">
                    <Button
                      htmlType="submit"
                      loading={loader}
                      onClick={(e)=>checkApplied(e,jobId)}
                      className="bg-[#000B80] px-10 h-10 font-poppins text-sm font-semibold tracking-[0.03em] leading-6 text-white-100"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </Card>
      </div>
    </div>
  );
}

export default Job;

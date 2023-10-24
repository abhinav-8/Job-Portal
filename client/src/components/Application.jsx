import { Button, Card, Input,message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserId, setUserName } from "../store/userSlice";

function Application() {
  let { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [userId, setUserID] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [jd, setJd] = useState("");
  const [skills, setSkills] = useState("");
  const [inputUsername, setInputUserName] = useState("");
  const [inputSkills, setInputSkills] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputWorkex, setInputWorkex] = useState("");
  const [inputEmailId, setInputEmailId] = useState("");
  const [inputReferences, setInputReferences] = useState("");
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
          console.log(jobId);
          let data = await axios.get(
            `http://localhost:3000/jobservice/api/v1/jobs/${jobId}`
          );
          console.log("data", data);
          setCompany(data.data.data.Company.name);
          setExperience(data.data.data.experience);
          setJd(data.data.data.jd);
          setSkills(data.data.data.skills);
          setTitle(data.data.data.title);

          //   setJobData(data.data.data);
        }
      } catch (error) {
        console.log(error);
        // navigate("/signup");
      }
    }
    isAuthenticated();
  }, []);

  const formValidation = () => {
    return inputUsername === '' || inputEmailId === '' || inputPhone === '' || inputSkills === '';
};

  async function apply(e) {
    try {
        e.preventDefault();
        const application = {
            jobId:jobId,
            userId:userId,
            name:inputUsername,
            email:inputEmailId,
            phone:inputPhone,
            workex:inputWorkex,
            skills:inputSkills,
            references:inputReferences
        }
        const token = Cookies.get("token");
        const applicationDetails = new URLSearchParams(Object.entries(application)).toString();
        let data = await axios.post("http://localhost:3002/applicationservice/api/v1/applications",applicationDetails,{
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`,
            }
        });
        await message.open({
            type: 'success',
            content: 'Successfully applied to the job',
            time:2
        });
        navigate('/');
    } catch (error) {
        message.open({
            type: 'error',
            content: error.response.data.err.error,
            time:2
        });
      console.log(error.response.data.err.error);
    }
  }
  return (
    <div>
      <div className="w-screen mt-10 text-center font-semibold text-black text-2xl">
        Hello {username} 👋
      </div>
      <div className="px-3 sm:px-0 w-screen mt-10 flex justify-center items-center">
        <Card className="bg-slate-100 w-1/2 shadow-2xl">
          <div className="p-6">
            <div className="text-black font-semibold text-3xl">
              Company Details:
            </div>
            <br />
            <br />
            {company.length && (
              <div className="text-black font-medium text-3xl">
                <span className="font-semibold">• Company Name:</span> {company}
              </div>
            )}
            {title.length && (
              <div className="text-black font-medium pt-2 text-3xl">
                <span className="font-semibold">• Job Role:</span> {title}
              </div>
            )}
            {experience.length && (
              <div className="text-black font-medium pt-2 text-3xl">
                <span className="font-semibold">• Experience Required:</span>{" "}
                {experience}
              </div>
            )}
            {skills.length && (
              <div className="text-black font-medium pt-2 text-3xl">
                <span className="font-semibold">• Skills Required:</span>{" "}
                {skills}
              </div>
            )}
            {jd.length && (
              <div className="text-black font-medium pt-2 text-3xl">
                <span className="font-semibold">• Job Description:</span> {jd}
              </div>
            )}
            <br />
            <br />
            <hr className="bg-slate-500 h-1" />
            <div className="text-black font-semibold text-3xl pt-10">
              Fill Your Details:
            </div>
            <br />
            <br />
            <form
              className="px-6 mt-6"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  apply(e);
                }
              }}
            >
              <div className="flex flex-col justify-center items-start">
                <div className="text-primary-200">
                  Name&nbsp;
                  <span className="inline-block w-2 rounded-[6px] text-[#FF0000]">
                    *
                  </span>
                  :
                </div>
                <Input
                  placeholder={"Enter Name"}
                  type={"text"}
                  value={inputUsername}
                  onChange={(e) => setInputUserName(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
              <div className="flex flex-col justify-center items-start mt-8">
                <div className="text-primary-200">
                  Email&nbsp;
                  <span className="inline-block w-2 rounded-[6px] text-[#FF0000]">
                    *
                  </span>
                  :
                </div>
                <Input
                  placeholder={"Enter Email Id"}
                  type={"text"}
                  value={inputEmailId}
                  onChange={(e) => setInputEmailId(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
              <div className="flex justify-flex flex-col justify-center items-start mt-8">
              <div className="text-primary-200">
                  Phone No&nbsp;
                  <span className="inline-block w-2 rounded-[6px] text-[#FF0000]">
                    *
                  </span>
                  :
                </div>
                <Input
                  placeholder={"Enter Phone no"}
                  type={"text"}
                  value={inputPhone}
                  onChange={(e) => setInputPhone(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
              <div className="flex justify-flex flex-col justify-center items-start mt-8">
              <div className="text-primary-200">
                  Skills&nbsp;
                  <span className="inline-block w-2 rounded-[6px] text-[#FF0000]">
                    *
                  </span>
                  :
                </div>
                <Input.TextArea
                  placeholder={"Enter your skills"}
                  type={"text"}
                  value={inputSkills}
                  autoSize={true}
                  showCount={true}
                  maxLength={250}
                  onChange={(e) => setInputSkills(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
              <div className="flex justify-flex flex-col justify-center items-start mt-8">
              <div className="text-primary-200">
                  Work Experience &nbsp;:
                </div>
                <Input.TextArea
                  placeholder={"Enter Work Experience if any"}
                  type={"text"}
                  maxLength={1200}
                  autoSize={true}
                  showCount={true}
                  value={inputWorkex}
                  onChange={(e) => setInputWorkex(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
              <div className="flex justify-flex flex-col justify-center items-start mt-8">
              <div className="text-primary-200">
                  References&nbsp;:
                </div>
                <Input.TextArea
                  placeholder={
                    "Enter references like your linkedin link,portfolio etc"
                  }
                  type={"text"}
                  maxLength={400}
                  autoSize={true}
                  showCount={true}
                  value={inputReferences}
                  onChange={(e) => setInputReferences(e.target.value)}
                  className="inline-block px-4 py-2 mt-1 text-primary-200 font-poppins border-[#000000A8] border-1 text-lg24"
                />
              </div>
            </form>
            <div className="flex justify-center mt-20">
            <Button
              htmlType="submit"
              loading={loader}
              disabled={formValidation()}
              onClick={(e) => apply(e)}
              className="bg-[#000B80] px-10 h-10 font-poppins text-sm font-semibold tracking-[0.03em] leading-6 text-white-100 login-login-button"
            >Apply</Button>
          </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Application;

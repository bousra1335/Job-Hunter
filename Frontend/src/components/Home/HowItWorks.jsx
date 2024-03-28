import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../main";
 

const HowItWorks = () => {
  const {user}=useContext(Context)
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job-Hunter Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <Link to="/login">Log In Into Your Account</Link>
              <p>By login into your account you can find this job hunting website to 
                meet the desired job for you.</p>
            </div>
            <div className="card">
              
              {user && user.role === "Job Seeker" && (
                <>
                  <MdFindInPage />
                  <Link to="/job/getall">Find a Job</Link>
                  <p>By this you can find jobs which are suited for you.</p>
                </>
              )}
              {user && user.role === "Employer" && (
                <>
                  <IoMdSend />
                  <Link to="/job/post">Post a Job</Link>
                  <p>By this you can post jobs to get the best employee.</p>
                </>
              )}
              
            </div>
            <div className="card">
              
              {user && user.role === "Job Seeker" && (
                <>
                  <IoMdSend />
                  <Link to="/job/getall">Apply For Job</Link>
                  <p>You can apply for your desired job. </p>
                </>
              )}
              {user && user.role === "Employer" && (
                <>
                  <MdFindInPage />
                  <Link to="/applications/me">Recruit Suitable Candidates</Link>
                  <p>You can recruit any suitable candidates who meets up your requirements the most.</p>
                </>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job-Hunter Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>By creating an account you can find this job hunting website to 
                meet the desired job for you.</p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>By this you can find jobs suited for you or post jobs to 
                get the best employee.</p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>You can apply for your desired job or recruit any suitable candidates who meets up 
                your requirements the most.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
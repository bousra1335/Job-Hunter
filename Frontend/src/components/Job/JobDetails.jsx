import React,{useContext,useEffect,useState} from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {Context} from "../../main";
import axios from 'axios';

const JobDetails = () => {
    const {id}= useParams();
    const [job, setJob] = useState({});
    const navigateTo = useNavigate();

    const {isAuthorized, user} = useContext(Context);
    useEffect(()=>{
        axios
            .get(`http://localhost:4000/api/v1/job/${id}`, {
                withCredentials: true,
            }).then(res=>{
                setJob(res.data.job);
            }).catch(err=>{
                console.log(err.response.data.json);
            });
    },[]);

    if(!isAuthorized){
        navigateTo("/login");
    }
    return(
    <>
    </>
    )

    
};
export default JobDetails;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from "../../main";
import axios from 'axios';

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});
    const navigateTo = useNavigate();

    const { isAuthorized, user } = useContext(Context);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/v1/job/${id}`, {
                withCredentials: true,
            })
            .then(res => {
                setJob(res.data.job);
            })
            .catch((error) => {
                navigateTo("/notfound");
            });
    }, []);

    if (!isAuthorized) {
        navigateTo("/login");
    }
    return (
        <section className='jobDetail page'>
            <div className='container'>
                <h3>Job Details</h3>
                <div className='banner'>
                    <p>
                        <span>Title:</span> { job.title }
                    </p>
                    <p>
                        <span>Category:</span> { job.category }
                    </p>
                    <p>
                        <span>Country:</span> { job.country }
                    </p>
                    <p>
                        <span>City:</span> { job.city }
                    </p>
                    <p>
                        <span>Location:</span> { job.location }
                    </p>
                    <p>
                        <span>Description:</span> { job.description }
                    </p>
                    <p>
                        <span>Job Posted On:</span> { job.jobPostedOn }
                    </p>
                    <p>
                        <span>Salary:</span> { " " }
                        { job.fixedSalary ? (
                            job.fixedSalary
                        ) : (
                            job.salaryFrom + " - " + job.salaryTo
                        ) }
                    </p>
                    { user && user.role === "Employer" ? (
                        <></>
                    ) : (
                        <Link to={ `/application/${job._id}` }>Apply Now</Link>
                    ) }
                </div>
            </div>
        </section>
    );
};
export default JobDetails;
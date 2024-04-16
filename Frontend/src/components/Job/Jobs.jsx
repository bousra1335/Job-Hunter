import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const [searchText, setSearchText] = useState("");
	const { isAuthorized } = useContext(Context);
	const navigateTo = useNavigate();

	const handleSearch = (e) => {
		setSearchText(e.target.value);
	};

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(
					`http://localhost:4000/api/v1/job/getall?search=${searchText}`,
					{
						withCredentials: true,
					}
				);
				setJobs(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchJobs();
	}, [searchText]);

	if (!isAuthorized) {
		navigateTo("/");
	}

	return (
		<section className="jobs page">
			<div className="container">
				<h1>ALL AVAILABLE JOBS</h1>
				<div className="search">
					<input
						type="text"
						placeholder="Search jobs🔍"
						value={searchText}
						onChange={handleSearch}
					/>
				</div>
				<div className="banner">
					{jobs.jobs &&
						jobs.jobs.map((element) => {
							return (
								<div className="card" key={element._id}>
									<h6>{element.title}</h6>
									<p>{element.category}</p>
									<p>{element.country}</p>
									<Link to={`/job/${element._id}`}>Job Details</Link>
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default Jobs;

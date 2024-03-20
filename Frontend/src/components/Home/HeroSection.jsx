import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
	const details = [
		{
			id: 1,
			title: "1,23,441",
			subTitle: "Live Job",
			icon: <FaSuitcase />,
		},
		{
			id: 2,
			title: "91220",
			subTitle: "Companies",
			icon: <FaBuilding />,
		},
		{
			id: 3,
			title: "2,34,200",
			subTitle: "Job Seekers",
			icon: <FaUsers />,
		},
		{
			id: 4,
			title: "1,03,761",
			subTitle: "Employers",
			icon: <FaUserPlus />,
		},
	];
	return (
		<>
			<div className="heroSection">
				<div className="container">
					<div className="title">
						<h1>Hunt the job that meets up</h1>
						<h1> with your interests and skills</h1>
						<p>
							A job hunting website that will help you to find the job that
							meets up the most with your interests and skills.
						</p>
					</div>
					<div className="image">
						<img src="/job.svg" alt="job" />
					</div>
				</div>
				<div className="details">
					{details.map((element) => {
						return (
							<div className="card" key={element.id}>
								<div className="icon">{element.icon}</div>
								<div className="content">
									<p>{element.title}</p>
									<p>{element.subTitle}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default HeroSection;

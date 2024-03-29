import React, { useState } from "react";

const FAQPage = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqData = [
		{
			question: "What is this website about?",
			answer:
				"This website is a job portal that connects job seekers with employers. You can search and apply for job openings posted by companies.",
		},
		{
			question: "How do I create an account?",
			answer:
				'To create an account, click on the "Sign Up" button in the top right corner of the website. You will be prompted to enter your personal details and create a password.',
		},
		{
			question: "Can I apply for multiple jobs?",
			answer:
				"Yes, you can apply for as many job openings as you like. However, make sure to tailor your resume and cover letter for each job application.",
		},
		{
			question: "How can I update my profile information?",
			answer:
				"Once logged in, you can access your profile settings by clicking on your name in the top right corner. From there, you can update your personal information, resume, and other details.",
		},
		{
			question: "How do I contact the website team?",
			answer:
				"You can contact our support team by sending an email to support@jobportal.com or by filling out the contact form on the website.",
		},
	];

	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq-container">
			<h1>Frequently Asked Questions</h1>
			<div className="faq-list">
				{faqData.map((item, index) => (
					<div className="faq-item" key={index}>
						<div className="faq-question" onClick={() => toggleAnswer(index)}>
							<h3>{item.question}</h3>
							<span>{activeIndex === index ? "-" : "+"}</span>
						</div>
						{activeIndex === index && (
							<div className="faq-answer">{item.answer}</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQPage;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TITLE = `Website :: Dashboard`;

const Dashboard = () => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('dashboard');
		return () => {
			body.classList.remove('dashboard');
		};
	});

	return (
		<>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<section className="">
				<div className="container">
					Dashboard Page
				</div>
			</section>
		</>
	);
};
export default Dashboard;
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import '../scss/pages/home.scss';

const TITLE = `Website :: Home`;

const Home = () => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('home');
		return () => {
			body.classList.remove('home');
		};
	});

	return (
		<>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<section className="">
				<div className="container">
					Home Page
				</div>
			</section>
		</>
	);
};
export default Home;
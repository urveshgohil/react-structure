import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TITLE = `Website :: Sign Up`;

const SignUp = () => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('sign-up');
		return () => {
			body.classList.remove('sign-up');
		};
	});

	return (
		<>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<section className="">
				<div className="container">
					Sign Up
				</div>
			</section>
		</>
	);
};
export default SignUp;
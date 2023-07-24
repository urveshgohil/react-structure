import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TITLE = `Website :: Sign In`;

const SignIn = (props) => {
	useEffect(() => {
		let body = document.querySelector('body');
		body.classList.add('sign-in');
		return () => {
			body.classList.remove('sign-in');
		};
	});

	return (
		<>
			<Helmet>
				<title>{TITLE}</title>
			</Helmet>
			<section className="">
				<div className="container">
					Sign In
					{props.appSuccess ? props.appSuccess : ''}
				</div>
			</section>
		</>
	);
};
export default SignIn;
import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true)
			} else setShow(false);
		})
		return () => {
			window.removeEventListener("scroll");
		}
	}, []);

	return (
		<div className={`navbar ${show && "navbar__black"}`}>
			<img
				className="navbar__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
				alt="Netflix Logo"
			/>
			<img
				className="navbar__avatar"
				src="https://occ-0-56-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFHJqNUeGyz6qFesBt8U7Z_N7JqBoPCztz6BZH8Aq3TRyG6-G7e2mW1rCWsvUywSWN5mCnItuJ2xCg9cROXU4MHZhug.png?r=a41"
				alt="Netflix Avatar"
			/>
		</div>
	)
}

export default Navbar

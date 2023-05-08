/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../assets/images/logo-no-background.png";
import { Link } from "react-router-dom";
import avatar from "../../../assets/images/avatar2.png";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import "./header.css";

const Header = () => {
	const navigate = useNavigate();

	const isLogged = localStorage.getItem("login");
	const username = localStorage.getItem("name");
	const id = localStorage.getItem("_id");
	const role = localStorage.getItem("role");

	console.log("id: ", id);

	const logout = async () => {
		console.log("logout");
		localStorage.clear();
		navigate("/");
		window.location.reload();
	};

	const profileNavigate = () => {
		navigate("/user/" + id);
	};

	return (
		// <!-- Navbar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			{/* <!-- Container wrapper --> */}
			<div class="container">
				{/* <!-- Navbar brand --> */}
				<a
					class="navbar-brand me-2"
					href="http://localhost:3000/"
					style={{ marginRight: "50px" }}>
					<img
						src={logo}
						alt="CTMS Logo"
						loading="lazy"
						style={{
							marginTop: "-18px",
							width: "120px",
							marginRight: "50px",
						}}
					/>
				</a>

				{/* <!-- Toggle button --> */}
				<button
					class="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarButtonsExample"
					aria-controls="navbarButtonsExample"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<i class="fas fa-bars"></i>
				</button>

				{/* <!-- Collapsible wrapper --> */}
				<div
					class="collapse navbar-collapse"
					id="navbarButtonsExample">
					{/* <!-- Left links --> */}
					<ul
						class="navbar-nav me-auto mb-2 mb-lg-0"
						style={{ marginLeft: "50px" }}>
						{role === "admin" ? (
							<li
								class="nav-item"
								style={{ margin: "0px 10px" }}>
								<a
									class="nav-link"
									href="/admin/dashboard">
									Dashboard
								</a>
							</li>
						) : (
							<li
								class="nav-item"
								style={{ margin: "0px 10px" }}>
								<a class="nav-link" href="/">
									Home
								</a>
							</li>
						)}
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="/locations">
								Locations
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="/about">
								About Us
							</a>
						</li>
						<li
							class="nav-item"
							style={{ margin: "0px 10px" }}>
							<a class="nav-link" href="/contact">
								Contact Us
							</a>
						</li>
					</ul>
					{isLogged ? (
						<div class="d-flex align-items-center">
							<button
								type="button"
								onClick={logout}
								class="btn btn-sm text-uppercase me-3 registerBtn">
								Logout
							</button>

							<button
								type="button"
								disabled={true}
								class="btn btn-sm text-uppercase me-3 registerBtn">
								{username}
							</button>
						</div>
					) : (
						/* <!-- Left links --> */
						<div class="d-flex align-items-center">
							<Link to="/auth/login">
								<button
									type="button"
									class="btn btn-sm btn-link px-3 me-2 text-uppercase loginBtn">
									Login
								</button>
							</Link>
							<Link to="/auth/register">
								<button
									type="button"
									class="btn btn-sm text-uppercase me-3 registerBtn">
									Sign up for free
								</button>
							</Link>
						</div>
					)}
				</div>

				{isLogged ? (
					/* <!-- Right elements --> */
					<div class="d-flex align-items-center">
						{/* <!-- Avatar --> */}
						<div class="dropdown">
							<img
								src={avatar}
								alt="Avatar"
								class="avatar"
								onClick={profileNavigate}
								data-tooltip-id="tooltip"
								data-tooltip-content="Go to Profile"
								data-tooltip-place="bottom"
							/>
						</div>
					</div>
				) : (
					<div></div>
				)}
				{/* <!-- Collapsible wrapper --> */}
			</div>
			{/* <!-- Container wrapper --> */}
			<Tooltip
				id="tooltip"
				style={{
					color: "#53a65b",
					zIndex: "10",
					backgroundColor: "#e5e5e5",
					fontSize: "12px",
				}}
			/>
		</nav>
	);
};

export default Header;

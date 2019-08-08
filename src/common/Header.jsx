import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LinkText from '../higher/LinkText';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					React Router
				</Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{/* nav-item => li */}
						{/* nav-link => Link */}
						<LinkText exact className="nav-item" to="/">
							首页
						</LinkText>
						<LinkText className="nav-item" to="/user">
							用户
						</LinkText>
						<LinkText className="nav-item" to="/member">
							会员
						</LinkText>
						<LinkText className="nav-item" to="/login">
							登陆
						</LinkText>
					</ul>
				</div>
			</nav>
		);
	}
}

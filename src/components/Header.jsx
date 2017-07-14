import { Component } from "react";
import { Link } from "react-router";

class Header extends Component {
	render() {
		return (
			<nav className="navs clearfix">
				<div className="float-left">
					<img src="src/assets/img/logo.png" width="230px" alt=""/>
				</div>
				<div className="float-right">
					<ul className="nav-right">
						<li><Link to={''}>About Us</Link></li>
						<li><Link to={''}>Transaction(0)</Link></li>
						<li><Link to={''}>Log In</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
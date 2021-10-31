import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogMaker from "./BlogMaker.js";
import DisplayBlog from "./DisplayBlog.js";

function App() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="BlogMaker">Make a Blog!</Link>
					</li>
					<li>
						<Link to="DisplayBlog">All the blogs</Link>
					</li>
				</ul>
			</div>

			<Switch>
				<Route path="/BlogMaker">
					<BlogMaker />
				</Route>
				<Route path="/DisplayBlog">
					<DisplayBlog />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

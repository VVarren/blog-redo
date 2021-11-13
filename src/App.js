import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BlogMaker from "./BlogMaker.js";
import DisplayBlog from "./DisplayBlog.js";
import IndividualBlog from "./IndividualBlog.js";
import { useLocalStorage } from "./useLocalStorage";
/*
TODO LIST:
Delete with dropdown menu
Make it look better
Pictures 
Advertisement


Later:
Make blog link when new blog is made
Picture with the blog link
Login
Up vote/Down VOte
Comments
*/

function App() {
	const [blogs, setBlogs] = useLocalStorage("Blogs", []);
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/BlogMaker">Make a Blog!</Link>
					</li>
					<li>
						<Link to="/DisplayBlog">All the blogs</Link>
					</li>
				</ul>
			</div>

			<Switch>
				<Route path="/BlogMaker">
					<BlogMaker />
				</Route>
				<Route path="/DisplayBlog">
					<DisplayBlog blogs={blogs} />
				</Route>
				<Route path="/Blogs/:BlogIndex">
					<IndividualBlog blogs={blogs} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

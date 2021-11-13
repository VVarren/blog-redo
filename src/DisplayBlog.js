import react from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Link } from "react-router-dom";
import "./Blog.css";
function DisplayBlog({ blogs }) {
	const allBlogs = blogs.map((blog, i) => (
		<div className="blog">
			<h3>{blog[0]}</h3>
			<p>This is blog {i + 1}</p>
			<Link to={`/Blogs/${i}`}>This is a link</Link>
		</div>
	));
	return (
		<>
			<button>Delete a blog</button>
			<div>{allBlogs}</div>
		</>
	);
}

export default DisplayBlog;

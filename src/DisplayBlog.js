import react from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./Blog.css";
function DisplayBlog() {
	const [blogs, setBlogs] = useLocalStorage("Blogs", []);
	const allBlogs = blogs.map((blog) => (
		<div className="blog">
			<h3>{blog[0]}</h3>
			<p>{blog[1]}</p>
		</div>
	));
	return <div>{allBlogs}</div>;
}

export default DisplayBlog;

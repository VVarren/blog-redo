import react from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useParams } from "react-router-dom";
import "./Blog.css";
function IndividualBlog({ blogs }) {
	const params = useParams();
	const blog = blogs[params.BlogIndex];
	return (
		<div className="blog">
			{console.log(params)}
			<h3>{blog[0]}</h3>
			<p>{blog[1]}</p>
		</div>
	);
}

export default IndividualBlog;

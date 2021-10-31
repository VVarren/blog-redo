import react from "react";
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function BlogMaker() {
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [blogs, setBlogs] = useLocalStorage("Blogs", []);

	return (
		<div>
			<input
				placeholder="Title"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			></input>
			<textarea
				rows="4"
				cols="50"
				placeholder="Description"
				onChange={(e) => setDescription(e.target.value)}
				value={description}
			></textarea>

			<button
				onClick={() => {
					const Blog = [title, description];
					setBlogs([...blogs, Blog]);
				}}
			>
				Click me
			</button>
		</div>
	);
}

export default BlogMaker;

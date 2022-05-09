import React, { useState, useEffect } from "react";
import Movie from "../components/movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>👍 Best 20 Movies</h1>
					<ul>
						{movies.map((movie, idx) => (
							<Movie
								key={movie.id}
								id={movie.id}
								title={movie.title}
								idx={idx + 1}
							/>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default Home;

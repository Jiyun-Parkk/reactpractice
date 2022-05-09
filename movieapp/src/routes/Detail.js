import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movieDetail";

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<MovieDetail
					key={movie.id}
					title={movie.title}
					coverImg={movie.large_cover_image}
					summary={movie.description_full}
					genres={movie.genres}
					runtime={movie.runtime}
				/>
			)}
		</div>
	);
}

export default Detail;

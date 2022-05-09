import style from "../movie.module.css";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieDetail({ title, coverImg, summary, genres, runtime }) {
	return (
		<div>
			<div className={style.moviebox}>
				<div className={style.gohome}>
					<Link to="/" className={style.link}>
						HOME
					</Link>
				</div>
				<div className={style.info}>
					<img src={coverImg} alt={title} />
					<div className={style.textbox}>
						<h2 className={style.title}>Movie Title : {title}</h2>
						<h3>Runtime : {runtime} min</h3>
						<h3>Summary :</h3>
						<p>{summary}</p>
						<h3>Genres :</h3>
						<ul>
							{genres.map((g) => (
								<li key={g}>{g}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
MovieDetail.propTypes = {
	title: PropTypes.string.isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	runtime: PropTypes.number.isRequired,
};
export default MovieDetail;

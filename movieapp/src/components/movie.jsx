import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../movielist.module.css";

function Movie({ id, title, idx }) {
	return (
		<>
			<li className={style.list}>
				<p className={style.index}>{idx}</p>
				<p>
					<Link to={`/movie/${id}`} className={style.link}>
						{title}
					</Link>
				</p>
			</li>
		</>
	);
}
Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	idx: PropTypes.number.isRequired,
};

export default Movie;

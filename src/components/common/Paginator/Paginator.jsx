import React from 'react';
import classes from "./Paginator.module.css";

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return (
		<div>
			{pages.map((page, index) => {
				return <span key={`${page}_${index}`}
					className={`${currentPage === page && classes.selectedPage} ${classes.pageItem}`}
					onClick={(e) => { onPageChanged(page); }}>{page} </span>
			})}
		</div>
	)
}

export default Paginator;

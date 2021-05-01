import React, { useState } from 'react';
import classes from './Paginator.module.css';
import cn from 'classnames';

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;


	return <div className={classes.paginator}>
		{portionNumber > 1 &&
			<button className={classes.paginatorNav} onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

		{pages
			.filter(pageNum => pageNum >= leftPortionPageNumber && pageNum <= rightPortionPageNumber)
			.map((pageNum, index) => {
				return <span className={cn({
					[classes.selectedPage]: currentPage === pageNum
				}, classes.pageNumber)}
					key={pageNum, index}
					onClick={(e) => {
						onPageChanged(pageNum);
					}}>{pageNum}</span>
			})}
		{portionCount > portionNumber &&
			<button className={classes.paginatorNav} onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}


	</div>
}

export default Paginator;

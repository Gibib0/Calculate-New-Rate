'use strict'
/**
 * 
 * @param {number} myRating 
 * @param {number} opponentRating 
 * @returns {number} - winner rating
 */
function calculateRating(myRating, opponentRating) {
	if(myRating < 0 || opponentRating < 0) {
		return NaN
	}

	if(typeof myRating !== 'number' || typeof opponentRating !== 'number') {
		return NaN
	}

	if(myRating === 0) {
		return opponentRating
	}
	if(opponentRating === 0) {
		return myRating
	}

	const difference = myRating - opponentRating

	if(difference >= 0 && difference <= 2) {
		myRating += 2
	} else if(difference > 2 && difference < 20) {
		myRating += 1
	} else if(difference < 0) {
		myRating += (Math.abs(difference) + 5) / 3
	}

	return Math.round(myRating * 10) / 10
}

console.log(calculateRating(-1, 2));
console.log(calculateRating('abc', 'def'));
console.log(calculateRating(10, 0));
console.log(calculateRating(0, 20));
console.log(calculateRating(10, 30));
console.log(calculateRating(20, 19));
console.log(calculateRating(30, 10));

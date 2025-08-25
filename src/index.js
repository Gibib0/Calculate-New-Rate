'use strict'

function calculateRating(myRating, opponentRating) {
	if(myRating < 0 || opponentRating < 0) {
		return null
	}

	if(typeof myRating !== 'number' || typeof opponentRating !== 'number') {
		return null
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
		myRating += (opponentRating - myRating + 5) / 3
	}

	
}
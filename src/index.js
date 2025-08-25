'use strict'

function calculateRating(winRating, loseRating) {
	if(winRating < 0 || loseRating < 0) {
		return null
	}

	if(typeof winRating !== 'number' || typeof loseRating !== 'number') {
		return null
	}
}
/* ================ Variables ================ */
const submitBtn = document.querySelector('.button');
const ratingScaleNumbers = document.querySelectorAll('.label')
const ratingScaleNumbersArray = [...ratingScaleNumbers];
const ratingResult = document.querySelector('.selected-rating');

/* ================ Functions ================ */
const showError = (message) => {
	const error = document.querySelector('.error');
	error.innerHTML = message;
}; 

const showSuccess = () => {
	const error = document.querySelector('.error');
	error.innerHTML = '';
}

const hideRatingWindow = () => {
	const ratingContainer = document.querySelector('.rating-window');
	const thankYouContainer = document.querySelector('.thank-you-window');

	ratingContainer.style.display = 'none';
	thankYouContainer.style.display = 'flex';
};

/* ================ Events ================ */
ratingScaleNumbersArray.forEach((item) => {
	item.addEventListener('click', () => {
		ratingResult.innerHTML = item.innerHTML;
		showSuccess();
	});
});

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (ratingResult.innerHTML > 0) {
		hideRatingWindow();
	}
	else {
		showError('Please, choose an option');
	}
});
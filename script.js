// rating container
let ratingContainer = document.querySelector('.rating-window');
let submitBtn = document.querySelector('.button');
let ratingScaleNumbers = document.querySelectorAll('.label')
let ratingScaleNumbersArray = [...ratingScaleNumbers];

// thank you container
let thankYouContainer = document.querySelector('.thank-you-window');
let ratingResult = document.querySelector('.selected-rating');

// gets a result rating number 
ratingScaleNumbersArray.forEach((item) => {
	item.addEventListener('click', function () {
		ratingResult.innerHTML = item.innerHTML;
	});
});

// hide the rating window
submitBtn.addEventListener('click', function () {
	ratingContainer.style.display = 'none';
	thankYouContainer.style.display = 'flex';
});
// rating container
let ratingContainer = document.querySelector('.rating-container');
let submitBtn = document.querySelector('.rating-btn');
let ratingScaleNumbers = document.querySelectorAll('.scale-number')
let ratingScaleNumbersArray = [...ratingScaleNumbers];

// thank you container
let thankYouContainer = document.querySelector('.thank-you-container');
let ratingResult = document.querySelector('#rating');

// gets a result rating number
ratingScaleNumbersArray.forEach((item) => {
	item.addEventListener('click', function(){
		ratingResult.innerHTML = item.innerHTML;
	});
});

// hide the rating window
submitBtn.addEventListener('click', function () {
	ratingContainer.style.display = 'none';
	thankYouContainer.style.display = 'flex';
});
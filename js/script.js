const ABOUT_TITLE = document.querySelector('.about__title');

const aboutTitleText = ABOUT_TITLE.textContent;
const aboutTitleArray = aboutTitleText.split('');


	ABOUT_TITLE.textContent = '';
	let i = 0;
	setInterval(() => {
		ABOUT_TITLE.textContent += aboutTitleArray[i];
		i++;
		if(i === aboutTitleArray.length) {
			clearInterval(1);
		}
		return 1
	}, 200);	


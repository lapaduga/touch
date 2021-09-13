document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

const logBlock = document.querySelector('h1');

let x1 = null;
let y1 = null;

function handleTouchStart (e){
	const firstTouch = e.touches[0];
	x1 = firstTouch.clientX;
	y1 = firstTouch.clientY;
}

function handleTouchMove (e){
	if (!x1 || !y1) {
		return false;
	}

	let x2 = e.touches[0].clientX;
	let y2 = e.touches[0].clientY;

	let xDiff = x2 - x1;
	let yDiff = y2 - y1;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			logBlock.textContent = 'Свайпнул вправо';
		} else{
			logBlock.textContent = 'Свайпнул влево';
		}
	} else{
		if (yDiff > 0) {
			logBlock.textContent = 'Свайпнул вниз';
		} else{
			logBlock.textContent = 'Свайпнул вверх';
		}
	}

	x1 = null;
	y1 = null;
}
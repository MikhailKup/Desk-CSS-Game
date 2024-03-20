const board = document.querySelector('#board');
const colors = ['#d12212', '#9a4bbc', '#4ea8e5', '#ea8b38', '#46db84'];
const squaresNumber = 810;

const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
};

const setColor = (elem) => {
	elem.style.backgroundColor = getRandomColor();
	elem.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`;
};
const removeColor = (elem) => {
	elem.style.backgroundColor = '#1d1d1d';
	elem.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < squaresNumber; i++){
	const newSquare = document.createElement('div');
	newSquare.classList.add('square');
	newSquare.addEventListener('mouseover', () => setColor(newSquare));
	newSquare.addEventListener('mouseleave', () => removeColor(newSquare));

	board.append(newSquare);
}
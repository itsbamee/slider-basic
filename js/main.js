const main = document.querySelector('main');
const [panel, btns] = main.querySelectorAll('ul');

console.log(Array.from(btns.children));

Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on')) return;
		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function movePanel(el, idx) {
	console.log('function called');
	new Anime(el, { left: -100 * idx + '%' });
}

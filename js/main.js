const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const main = document.querySelector('main');
//const [panel, btns] = main.querySelectorAll('ul');
const speed = 1000;
let evtBlock = false;
createDom(main, pics);

Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;

		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});

function createDom(targetEl, arr) {
	let tags = '';
	let tags2 = '';
	const ul = document.createElement('ul');
	const ul2 = document.createElement('ul');
	ul.classList.add('panel');
	ul2.classList.add('btns');

	arr.forEach((pic) => (tags += `<li style='background-image:url(img/${pic})'></li>`));
	arr.forEach((_, idx) => (tags2 += `<li></li>`));
	ul.innerHTML = tags;
	ul2.innerHTML = tags2;
	targetEl.append(ul);
	targetEl.append(ul2);
}

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function movePanel(el, idx) {
	evtBlock = true;
	console.log('function called');
	new Anime(el, { left: -100 * idx + '%' }, { duration: speed, callback: () => (evtBlock = false) });
}

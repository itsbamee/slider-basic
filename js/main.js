const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const main = document.querySelector('main');
//const [panel, btns] = main.querySelectorAll('ul');
const speed = 1000;
let evtBlock = false;
createDom(main, pics);

/*
Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;

		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});
*/

function createDom(targetEl, arr) {
	let tags = '';
	const ul = document.createElement('ul');
	ul.classList.add('panel');

	arr.forEach((pic, idx) => {
		//index기준으로 경로를 찾으므로 ../ 안해준다.
		tags += `<li style='background-image:url(img/${pic})'></li>`;
	});
	ul.innerHTML = tags;
	targetEl.append(ul);
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

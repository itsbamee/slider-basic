const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const main = document.querySelector('main');
const speed = 1000;
let evtBlock = false;

createDOM(main, pics);

/*
Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;
		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});
*/

function createDOM(targetEl, arr) {
	const names = ['panel', 'btns'];

	//클래스명을 반복돌면서 두개의 ul을 동적 생성하고 내부적으로 li까지 추가
	names.map((name, idx) => {
		let tags = '';
		const ul = document.createElement('ul');
		ul.classList.add(name);
		idx === 0 ? arr.forEach((pic) => (tags += `<li style='background-image:url(img/${pic})'></li>`)) : arr.forEach((_, idx) => (tags += `<li class='${idx === 0 && 'on'}'></li>`));

		ul.innerHTML = tags;
		targetEl.append(ul);
	});
	//동적으로 생선된 두개의 ul을 찾아서 반환
	const [panel, btns] = targetEl.querySelectorAll('ul');
	//이벤트 연결한 함수에 인수로 전달
	bindingEvent(panel, btns);
}

function bindingEvent(panel, btns) {
	Array.from(btns.children).forEach((btn, idx) => {
		btn.addEventListener('click', (e) => {
			if (e.target.classList.contains('on') || evtBlock) return;
			activation(Array.from(btns.children), idx);
			movePanel(panel, idx);
		});
	});
}

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function movePanel(el, idx) {
	evtBlock = true;
	console.log('func called!!');
	new Anime(el, { left: -100 * idx + '%' }, { duration: speed, callback: () => (evtBlock = false) });
}

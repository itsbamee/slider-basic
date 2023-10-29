const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const main = document.querySelector('main');
//const [panel, btns] = main.querySelectorAll('ul');
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
	//동적인 ul에 붙일 클래스명을 배열로 저장
	const names = ['panel', 'btns'];

	//클래스명 배열을 반복처리
	names.map((name, idx) => {
		//반복을 돌면서 ul태그 동적생성하고 각각의 클래스명을 적용
		let tags = '';
		const ul = document.createElement('ul');
		ul.classList.add(name);

		//현재 반복도는 순서값이 첫번째 ul이면 배경이미지가 적용된 li반복요소를 내부적으로 삽입하는 태그 문자열 생성
		//그렇지 않으면 버튼 li요소를 삽입하는 태그 문자열 생성
		idx === 0 ? arr.forEach((pic) => (tags += `<li style='background-image:url(img/${pic})'></li>`)) : arr.forEach((_, idx) => (tags += `<li class='${idx === 0 && 'on'}'></li>`));

		//동적 ul에 위에서 만든 tags li문자열을 삽입
		ul.innerHTML = tags;
		//li가 삽입된 ul을 최종적으로 프레임요소에 추가
		targetEl.append(ul);
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

const main = document.querySelector('main');
const [panel, btns] = main.querySelectorAll('ul');
const speed = 1000;
let evtBlock = false;
/*
  모션 중 이벤트 핸들러 호출방지흐름 (슬라이드 도는 중에 다른 슬라이드 버튼 눌러도 이벤트안되도록)
  1. evtBlock값을 false로 초기화 한뒤 이벤트문 안쪽에 해당 값이 true일때 return으로 중지처리
  2. 버튼 클릭시 무조건 evtBlock 전역변수의 값을 true로 변경 (처음에 한번만 이벤트 함수 호출하고 그 이후에는 동작 안함)
  3. new Anime의 callback함수로 evtBlock값을 false로 변경 (모션중에는 이벤트 함수 호출이 막혀있다가 모션이 끝난 시점을 callback으로 인지해서 다시 전역변수를 이벤트 호출 가능하도록 변경)
*/
console.log(Array.from(btns.children));

Array.from(btns.children).forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		if (e.target.classList.contains('on') || evtBlock) return;

		activation(Array.from(btns.children), idx);
		movePanel(panel, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function movePanel(el, idx) {
	evtBlock = true;
	console.log('function called');
	new Anime(el, { left: -100 * idx + '%' }, { duration: speed, callback: () => (evtBlock = false) });
}

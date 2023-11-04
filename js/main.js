const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const btns = main.querySelectorAll('span');
const toggleBtn = main.querySelector('.toggleBtn');
const speed = 500;
const interval = 2000;
let evtBlock = false;
let timer = null;

init(panel.children.length);
bindingEvent(btns);

//로딩시 setInterval로 move함수 2초 간격으로 반복 호출
timer = setInterval(() => move(btns[1].className), interval);

function init(len) {
	panel.style.width = 100 * len + '%';
	Array.from(panel.children).forEach((el) => (el.style.width = 100 / len + '%'));

	panel.prepend(panel.lastElementChild);
}

function bindingEvent(arr) {
	arr.forEach((btn) =>
		btn.addEventListener('click', () => {
			move(btns[1].className);
			if (evtBlock) return;
			//좌우버튼 클릭시 무조건 롤링정지하고 stop 클래스 추가
			clearInterval(timer);
			toggleBtn.classList.add('stop');

			//슬라이드 기능 구현
			move(btn.className);
		})
	);

	toggleBtn.addEventListener('click', (e) => {
		if (e.currentTarget.classList.contains('stop')) {
			timer = setInterval(() => move(btns[1].className), interval);
			e.currentTarget.classList.remove('stop');
		} else {
			clearInterval(timer);
			e.currentTarget.classList.add('stop');
		}
	});
}

function move(direction) {
	evtBlock = true;
	new Anime(
		panel,
		{ left: direction === btns[0].className ? '0%' : '-200%' },
		{
			duration: speed,
			callback: () => {
				direction === btns[0].className
					? panel.prepend(panel.lastElementChild)
					: panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
				evtBlock = false;
			},
		}
	);
}

const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const [prev, next] = main.querySelectorAll('span');
const speed = 500;
let evtBlock = false;

prev.addEventListener('click', () => {
	if (evtBlock) return;
	movePrev();
});

next.addEventListener('click', () => {
	if (evtBlock) return;
	moveNext();
});

function movePrev() {
	evtBlock = true;
	new Anime(
		panel,
		{ left: '0%' },
		{
			duration: speed,
			callback: () => {
				panel.prepend(panel.lastElementChild);
				panel.style.left = '-100%';
				evtBlock = false;
			},
		}
	);
}

function moveNext() {
	evtBlock = true;
	new Anime(
		panel,
		{ left: '-200%' },
		{
			duration: speed,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
				evtBlock = false;
			},
		}
	);
}

//순환 슬라이더 로직 (왼쪽이동)
//1. 일단 패널을 왼쪽이동시킴 (현재 위치값이 -100%이므로 -200%으로 모션 이동 처리)
//2. callback을 이용해서 모션이 끝난시점에 순간적으로 첫번째 자식슬라이드를 맨 뒤로 이동
//3. 이동이 끝나면 패널이 앞쪽으로 밀리기 때문에 다시 순간적으로 패널의 위치값을 초기위치값은 -100%로 변경

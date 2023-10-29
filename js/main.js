const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const [prev, next] = main.querySelectorAll('span');

next.addEventListener('click', () => {
	new Anime(
		panel,
		{ left: '-200%' },
		{
			duration: 2000,
			callback: () => {
				panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
			},
		}
	);
});

//순환슬라이더 로직 (왼쪽이동)
//1. 일단 패널을 왼쪽으로 이동시킴
//2. callback을 이용해서 모션이 끝난 시점에 순간적으로 첫번째 자식 슬라이더를 맨 뒤로 이동
//3. 이동이 끝나면 다시 패널이 앞쪽으로 밀리기 때문에 다시 순간적으로 전체 패널의 위치값을 다시 초기 위치값인 -100%로 변경처리

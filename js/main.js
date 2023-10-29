const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const btns = main.querySelectorAll('span');
const speed = 500;
let evtBlock = false;

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (evtBlock) return;
		move(btn.className);
	});
});

/*
prev.addEventListener('click', () => {
	if (evtBlock) return;
	move('prev');
});

next.addEventListener('click', () => {
	if (evtBlock) return;
	move('next');
});
*/

function move(direction) {
	evtBlock = true;
	new Anime(
		panel,
		{ left: direction === 'prev' ? '0%' : '-200%' },
		{
			duration: speed,
			callback: () => {
				direction === 'prev' ? panel.prepend(panel.lastElementChild) : panel.append(panel.firstElementChild);
				panel.style.left = '-100%';
				evtBlock = false;
			},
		}
	);
}

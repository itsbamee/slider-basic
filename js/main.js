const main = document.querySelector('main');
const panel = main.querySelector('.panel');
const btns = main.querySelectorAll('span');
const speed = 500;
const interval = 2000;
let evtBlock = false;
let timer = null;

init(panel.children.length);
bindingEvent(btns);

timer = setInterval(() => move(btns[1].className), interval);

function init(len) {
	panel.style.width = 100 * len + '%';
	Array.from(panel.children).forEach((el) => (el.style.width = 100 / len + '%'));

	panel.prepend(panel.lastElementChild);
}

function bindingEvent(arr) {
	arr.forEach((btn) => btn.addEventListener('click', () => !evtBlock && move(btn.className)));
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

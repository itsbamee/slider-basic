//순번 0 : 0%
//순번 1 : -100%
//순번 2 : -200%
//순번 3 : -300%
//순번 4 : -400%

//idx : -100% * idx+'+'

const main = document.querySelector('main');
const [panel, btns] = main.querySelectorAll('ul');

//Array.from(유사배열) : 유사배열을 순수배열로 반환해준다.
console.log(Array.from(btns.children));

//순수배열로 변환한 버튼 요소를 반복처리
Array.from(btns.children).forEach((btn, idx) => {
	//반복도는 해당 버튼에 클릭 이벤트 연결
	btn.addEventListener('click', (e) => {
		//클릭이벤트 발생 시 모든 버튼 반복돌면서 ON 제거해새ㅓ 버튼 초기화
		Array.from(btns.children).forEach((btn) => btn.classList.remove('on'));
		//클릭한 버튼만 활성화
		e.target.classList.add('on');

		//클릭한 버튼의 순번 위치값으로 panel 좌우이동
		new Anime(panel, { left: -100 * idx + '%' });
	});
});

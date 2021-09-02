var animation = anime.timeline({
		autoplay: false
	});
	
	animation
	.add({
		targets: '#btn',
		top: '1500px',
		duration: 500,
		easing: 'easeInOutSine'

	})
	animation
	.add({
		targets: '#stars',
		top: '0px',
		duration: 1000,
		easing: 'easeInOutBack'

	})
	
	.add({
		targets: '#mountains_front',
		bottom: '0px',
		duration: 1000,
		easing: 'easeInOutSine'

	})
	.add({
		targets: '#mountains_behind',
		bottom: '0px',
		duration: 1000,
		easing: 'easeInOutSine'

	})
	.add({
		targets: '#text',
		visibility: 'visible',
		scale: '100%',
		duration: 1000,
		easing: 'easeInOutSine'

	})

	document.querySelector('#btn').onclick = animation.play




	const hamburger_menu = document.querySelector('.hamburger-menu');
const container = document.querySelector('.inner');


hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

function toggle(){
	var curtain = document.getElementById('curtain');
	curtain.classList.toggle('active')
}






const text = document.querySelector('.text-spin p');
text.innerHTML = text.innerText.split("").map(
	(char, i) =>
	`<span style="transform:rotate(${i * 7.7}deg)">${char}</span>`
	).join("")
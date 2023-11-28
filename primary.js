document.addEventListener('init', function(event) {
	console.log("This is a lifecycle event.", event.target);

	let page = event.target;
	if (page.matches("#first-page")) {
		page.querySelector('ons-toolbar.center').innerHTML = "Boycott App";
		page.querySelector('ons-button').onclick = function() {
			getUserMedia({
				video: {
					facingMode: {exact: "environment"},
				},
			});
		}
	}
});
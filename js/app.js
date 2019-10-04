const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");
const img = document.getElementById("img");

mainBtn.addEventListener("click", function() {
	const ajax = new XMLHttpRequest();
	const url = "https://api.chucknorris.io/jokes/random";
	ajax.open("GET", url, true);

	ajax.onload = function() {
		if (this.status === 200 || this.status === 4) {
			const data = JSON.parse(this.responseText);
			const { icon_url: img_icon, value: joke } = data;

			result.textContent = joke;
			img.src = img_icon;
		}
	};

	ajax.onerror = function() {
		console.log("there was an error");
	};

	ajax.send();
});

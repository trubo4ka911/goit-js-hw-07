const selectorFont = document.getElementById('font-size-control');
	const selectorText = document.getElementById('text');
	
	selectorText.style.fontSize = `${selectorFont.value}px`;
	selectorFont.addEventListener("input", () => {
		selectorText.style.fontSize = `${selectorFont.value}px`;
	});
async function buscar(textImg) {
	let imagen
	let found = false
	let guardada = false
	const palabrasB = [
		'numero 1', 'letra ñ', 'zanahoria', 'papá', 'maíz', 'juguete', 'rinoceronte', 'letra z'
	]

	for (let index = 0; index < palabrasB.length; index++) {
		if (palabrasB[index] == textImg) {
			guardada = true
		}
	}
	const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${textImg} png&count=100000&mkt=es-AR`;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6c4b6fb945mshda38336cdc12003p1049b1jsn94562655b31d',
			'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		var index = 0
		do {
			if (result.value[index].encodingFormat) {	
				let link = result.value[index].encodingFormat
			if (result.value[index].encodingFormat=="png") {
				if (link.startsWith('https://www.goyavirtual.com') || link.startsWith('https://assets') || link.startsWith('https://www.kindpng.com') || link.startsWith('https://carmelourso.files.wordpress.com') || link.startsWith('https://static.wikia.nocookie.net') || link.startsWith('https://lookaside.fbsbx.com') || link.startsWith('https://assets.stickpng') || link.startsWith('https://assets.stickpng.com') || link.startsWith('https://publicdomainvectors.org') || link == "https://assets.stickpng.com/images/58e341d725b2455e1b159d8b.png" || link == "https://www.kindpng.com/picc/m/63-633578_letter-j-png-letras-cor-de-ouro-transparent.png" || link == "https://w7.pngwing.com/pngs/649/496/png-transparent-brown-bear-polar-bear-grizzly-bear-bear-mammal-brown-animals.png" || link.endsWith('.png') || link.indexOf("images") !== -1 || link.indexOf(".png") !== -1)  {
					
					}else{
					imagen=result.value[index].contentUrl
					found = true
					console.log(index)
					return imagen
				}
			}
			}
			index +=1
		} while (found==false);
	} catch (error) {
		console.error(error);
	}
}
const input = document.querySelectorAll('input')
const button = document.querySelector('button')
const imgContainer = document.querySelector('.img-container')
let selectedImg = null
const downloadBtn = document.getElementById('downloadBtn')
const imgSrcInput = document.getElementById('imgsrc')

button.onclick = () => {
	if (input[0]) {

		var http = new XMLHttpRequest()
		var data = new FormData()
		data.append('prompt', input[0].value)
		http.open('POST', 'request.php', true)
		http.send(data)
		http.onload = () => {
			imgContainer.innerHTML = ''
			var response = JSON.parse(http.response).data
			response.forEach(e => {
				var img = document.createElement('img')
				img.src = 'data:image/jpeg;base64,' + e.b64_json
				img.addEventListener('click', () => {
					if (selectedImg) {
						selectedImg.classList.remove('selected')
					}
					selectedImg = img
					selectedImg.classList.add('selected')
					downloadBtn.disabled = false
				})
				imgContainer.appendChild(img)
			})
		}

	}
}


downloadBtn.onclick = () => {
	const imgBase64Data = selectedImg.src.replace(/^data:image\/jpeg;base64,/, '');
	imgSrcInput.value = imgBase64Data;
}

const addTextBtn = document.getElementById('addTextBtn');

addTextBtn.onclick = () => {
	if (selectedImg) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = selectedImg.src;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);


			const userText = prompt('Enter text to add to image:');


			ctx.font = 'bold 48px Arial';
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';


			const lines = [];
			const words = userText.split(' ');
			let currentLine = words[0];
			for (let i = 1; i < words.length; i++) {
				const word = words[i];
				const width = ctx.measureText(currentLine + ' ' + word).width;
				if (width < canvas.width && currentLine !== '') {
					currentLine += ' ' + word;
				} else {
					lines.push(currentLine);
					currentLine = word;
				}
			}
			lines.push(currentLine);


			const lineHeight = 60;
			const y = (canvas.height - lines.length * lineHeight) / 2;

			for (let i = 0; i < lines.length; i++) {
				const maxWidth = canvas.width - 40;
				const words = lines[i].split(' ');
				let currentLine = words[0];

				for (let j = 1; j < words.length; j++) {
					const word = words[j];
					const width = ctx.measureText(currentLine + ' ' + word).width;

					if (width < maxWidth) {
						currentLine += ' ' + word;
					} else {
						const textHeight = ctx.measureText('M').width;
						ctx.fillText(currentLine, canvas.width / 2, y + i * lineHeight);
						currentLine = word;
						i++;
						if (y + (i + 1) * lineHeight + textHeight > canvas.height) {
							break;
						}
					}
				}

				ctx.fillText(currentLine, canvas.width / 2, y + i * lineHeight);
			}

			selectedImg.src = canvas.toDataURL('image/jpeg');
		};
	}
};





const clearImagesBtn = document.getElementById('clearImagesBtn');

clearImagesBtn.onclick = () => {
	if (selectedImg) {

		selectedImg.src = selectedImg.getAttribute('data-original-src');


		selectedImg = null;
	}
};

const addEmojiBtn = document.getElementById('addEmojiBtn');

addEmojiBtn.onclick = () => {
	if (selectedImg) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = selectedImg.src;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;


			ctx.drawImage(img, 0, 0);


			const emojis = ['😀', '😢', '😍'];
			const fontSize = 50;
			const padding = 10;
			let posY = canvas.height - ((fontSize + padding) * emojis.length) - padding;

			emojis.forEach((emoji) => {
				ctx.font = `${fontSize}px sans-serif`;
				ctx.textAlign = 'right';
				ctx.textBaseline = 'middle';
				ctx.fillText(emoji, canvas.width - padding, posY + (fontSize / 2));
				posY += fontSize + padding;
			});

			selectedImg.src = canvas.toDataURL('image/jpeg');
		}
	}
}

const addImagesBtn = document.getElementById('addImagesBtn');

addImagesBtn.onclick = () => {
	if (selectedImg) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = selectedImg.src;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;


			ctx.drawImage(img, 0, 0);


			const image1 = new Image();
			image1.src = 'image/image1.jpg';
			const image2 = new Image();
			image2.src = 'image/image2.jpg';


			Promise.all([image1, image2].map(img => new Promise(resolve => {
				img.onload = () => {
					resolve();
				};
			}))).then(() => {
				const padding = 10;
				const imageSize = (canvas.height - (padding * 3)) / 2;
				const posX = canvas.width - imageSize - padding;
				const posY1 = padding;
				const posY2 = padding * 2 + imageSize;

				ctx.drawImage(image1, posX, posY1, imageSize, imageSize);
				ctx.drawImage(image2, posX, posY2, imageSize, imageSize);

				selectedImg.src = canvas.toDataURL('image/jpeg');
			});
		};
	}
};

const addExtBtn = document.getElementById('addExtBtn');

addExtBtn.onclick = () => {
	if (selectedImg) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = selectedImg.src;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;


			ctx.drawImage(img, 0, 0);


			const text = 'Learn More';
			const fontSize = 30;
			const padding = 10;
			const textWidth = ctx.measureText(text).width;
			const rectWidth = textWidth + padding * 2 + 100;
			const rectHeight = fontSize + padding * 2;
			const rectX = (canvas.width - rectWidth) / 2;
			const rectY = (canvas.height - rectHeight) / 2;
			const cornerRadius = 20;


			ctx.fillStyle = 'purple';
			ctx.beginPath();
			ctx.moveTo(rectX + cornerRadius, rectY);
			ctx.lineTo(rectX + rectWidth - cornerRadius, rectY);
			ctx.arcTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius, cornerRadius);
			ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
			ctx.arcTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - cornerRadius, rectY + rectHeight, cornerRadius);
			ctx.lineTo(rectX + cornerRadius, rectY + rectHeight);
			ctx.arcTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius, cornerRadius);
			ctx.lineTo(rectX, rectY + cornerRadius);
			ctx.arcTo(rectX, rectY, rectX + cornerRadius, rectY, cornerRadius);
			ctx.closePath();
			ctx.fill();


			ctx.font = `${fontSize}px sans-serif`;
			ctx.fillStyle = 'white';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(text, canvas.width / 2, canvas.height / 2);

			selectedImg.src = canvas.toDataURL('image/jpeg');
		}
	}
}

const addTxtBtn = document.getElementById('addTxtBtn');

addTxtBtn.onclick = () => {
	if (selectedImg) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.src = selectedImg.src;
		img.onload = () => {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);


			const userText = prompt('Enter text to add to image:');


			const fontSize = 24;
			const font = `${fontSize}px Arial`;
			ctx.font = font;
			ctx.textAlign = 'center';
			ctx.fillStyle = 'white';


			const maxWidth = canvas.width;
			const lineHeight = fontSize * 1.5;
			const textWidth = ctx.measureText(userText).width;
			const textHeight = lineHeight * Math.ceil(textWidth / maxWidth);


			const x = canvas.width / 2;
			const y = canvas.height - textHeight / 2;
			let words = userText.split(' ');
			let currentLine = words[0];
			let lines = [];

			for (let i = 1; i < words.length; i++) {
				const width = ctx.measureText(currentLine + ' ' + words[i]).width;
				if (width < maxWidth) {
					currentLine += ' ' + words[i];
				} else {
					lines.push(currentLine);
					currentLine = words[i];
				}
			}
			lines.push(currentLine);

			for (let i = 0; i < lines.length; i++) {
				ctx.fillText(lines[i], x, y + i * lineHeight - ((lines.length - 1) * lineHeight / 2));
			}

			selectedImg.src = canvas.toDataURL('image/jpeg');
		};
	}
};


window.fbAsyncInit = function() {
	FB.init({
		appId: '159329380401589',
		cookie: true,
		xfbml: true,
		version: 'v13.0'
	});

	FB.AppEvents.logPageView();
};


function shareImage() {

	var imageUrl = document.querySelector("#shareBtn img").getAttribute("src");

	FB.ui({
		method: 'share',
		href: window.location.href,
		quote: 'Проверете това генерирано изображение!',
		hashtag: '#генерираноизображение',
		picture: imageUrl
	}, function(response) {
		if (response && !response.error_message) {
			alert('Изображението е споделено успешно!');
		} else {
			alert('Грешка при споделяне на изображението.');
		}
	});
}


document.getElementById('shareBtn').addEventListener('click', function() {
	shareImage();
});


(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) { return; }
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
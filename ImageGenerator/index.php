<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Image Finder</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script src="https://kit.fontawesome.com/e5a4033df5.js"
	crossorigin="anonymous"></script>
<script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0" async defer></script>
</head>

<body>
	<header class="header">
		<div class="logo">
			<img src="image/Frame 96.png" alt="">
		</div>

		<div class="user-action">
			<input type="text">
		</div>

		<div>
			<button>
				<i class="fas fa-search"></i>
			</button>
		</div>
	</header>

	<div class="form">
		<div class="img-container"></div>

		<div class="frame-box">
			<form method="post" action="download.php">
				<input type="hidden" name="imgsrc" id="imgsrc">
				<button type="submit" id="downloadBtn" disabled>
					<img src="image/Frame 97.png" alt="">
				</button>
				<button type="button" id="shareBtn" onclick="shareImage();" disabled>
					<img src="image/Frame 98.png" alt="">
				</button>
			</form>

			<h4>Frames</h4>

			<div class="button-group">
				<button id="clearImagesBtn">
					<img src="image/Empty Frame.png" alt="">
				</button>
				<button id="addTextBtn">
					<img src="image/Icon Frame(1).png" alt="">
				</button>
				<button id="addEmojiBtn">
					<img src="image/Icon Frame.png" alt="">
				</button>
			</div>

			<div class="button-group">
				<button id="addExtBtn">
					<img src="image/Text Frame(1).png" alt="">
				</button>
				<button id="addImagesBtn">
					<img src="image/Empty Frame(1).png" alt="">
				</button>
				<button id="addTxtBtn">
					<img src="image/Text Frame.png" alt="">
				</button>
			</div>
		</div>
	</div>

	<script src="js/script.js"></script>
</body>

</html>








var param = {
		"contentwrapper": "ktsFlipperWrapper",
		"title": "20 Things About Me",
		"subtitle": "Here are 20 things about me you might find interesting.",
		"colorscheme": 0,
		"images": [
					"https://drive.google.com/uc?id=1FObgsMGdHQqBhQLeB8E-e4jmEfa6zN4W",
					"https://drive.google.com/uc?id=1_iW927HURWBkurrQ3jSie9RAhVyAVaiZ",
					"https://drive.google.com/uc?id=1-ieJ2oJC25gp0IR_EdREdBYK4gXJsY9L",
					"https://drive.google.com/uc?id=1GOZ0T3xFrY5Nw7QobSRf02tLwy-48LGO",
					"https://drive.google.com/uc?id=1yFl0J3VOrxWVVIkjpC2OBNWrirSGfB6w",
					"https://drive.google.com/uc?id=1DDf1rNTGtpYuRehiQ2DNDv3peoy_S0qb",
					"https://drive.google.com/uc?id=1jn2AHXyVxqluv9Mg17N-wRGY1Ex2xmZE",
					"https://drive.google.com/uc?id=1X8cxOKQLa8Dl8vZcaaAM7EpP12CIBniV",
					"https://drive.google.com/uc?id=1_OiPubAgUAHXTAJ_AoobRlcTwjiroiTl",
					"https://drive.google.com/uc?id=109mYDkj86kpVLOM5HnVr0wapEapN-7ua",
					"https://drive.google.com/uc?id=1PVWhmfGccM8eXYBRXcQGuaezPZ6xrFjZ",
					"https://drive.google.com/uc?id=1EbRP2cV-3H9PH5Wwc-6sXombk-C6Kqgr",
					"https://drive.google.com/uc?id=1KJKCrXRLyPAPNJUXVpedrM-WX35UdXeu",
					"https://drive.google.com/uc?id=1obgJ4qpBMYeFQZQgQH-zoc65xr-b7lwD",
					"https://drive.google.com/uc?id=1l9Mo3no78Ir2_3nCd1h5l045sAAlGLaO",
					"https://drive.google.com/uc?id=1W3oFOtWPVV8KutA4cgv76DX3MFpMUAkk",
					"https://drive.google.com/uc?id=16B_SS4cqSNhYC-Z6ruckX5Q9VST8rpbe",
					"https://drive.google.com/uc?id=1fULDQ4ERqLGzzwJ-8ltbyrSnt13xAquH",
					"https://drive.google.com/uc?id=1fXVPJn06YoANSvC9XGVQMxq701zaJl_z",
					"https://drive.google.com/uc?id=133xtCM6awjqhF8zsTZc94q309bd4mfPP"
				]
	
};

var iframeHTMLContent = ''
	+'	<head>'
	//+'		<link rel="stylesheet" href="styles/flipper.css" type="text/css" />'
	+'	</head>'
		
	+'	<body>'
	+'		<span>'
	+'			<span id="ktsFlipperWrapper" class="kts-flipper"> loading... </span>'
	+'		</span>'

	+'		<script src="scripts/flipper.js"> </script>'
			
	+'		<script>'
	+'			ktsFlipperCode.prepareFlipper(' + JSON.stringify(param) + ');	'
	+'		</script>'
	+'	</body>'
	+'	</html>';

function doTest(elemId)
{	
	var iframe = document.createElement('iframe');
	iframe.srcdoc = iframeHTMLContent;
	iframe.style = "width: 620px; height: 570px; border:none";
	iframe.scrolling = "no";
	
	var iframeWrapper = document.getElementById(elemId)
	iframeWrapper.innerHTML = "";
	iframeWrapper.appendChild(iframe);
}
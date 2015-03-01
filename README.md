#navHighlighter

## Usage

navHighlighter will create a subtle underline on all of the active navigation links letting your users know where they are on your page. When you hover the links, or scroll between the sections of your website, the underline will animate in.

## Getting Started

Download jquery.navHighlighter.js from GitHub and copy the files into the JavaScript folder in your directory.

Add the plugin's style sheet to the head of your HTML document. Make sure you link if before your own as it has default styling included and you don't want it to overwrite your CSS.

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>navHighlighter</title>
	<link rel="stylesheet" href="styles/navHighlighterStyle.css.css">
</head>
```

Include a link to jQuery and a link to plugin at the bottom of your HTML document before the last body tag.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="jquery.navHighlighter.js"></script>
```

## How It Works

navHighlighter works by adding and removing the class of ".nav-active" to the different sections of your website. For the plugin to work, add a class of ".navHighlighter" to the unordered list that holds your navigation links.

```
<nav class="top">
		<ul class="navHighlighter">
			<li><a href="#usage">Usage</a></li>
			<li><a href="#gettingStarted">Getting Started</a></li>
			<li><a href="#howItWorks">How It Works</a></li>
			<li><a href="#customize">Customize</a></li>
			<li><a href="#download">Download</a></li>
		</ul>
</nav>
```

## Customize

navHighlighter wouldn't be great if you couldn't customize it to suit the look of your site. You can adjust the colour, the height and the blur of the underline. You can adjust the colour using any method (hex code, rgb value, name, etc.).

First, call the function within the &lt;script&gt;&lt;/script&gt; tags in your HTML or main Javascript file. When you call the function, make sure you set it to select the body element. Then update your options as you see fit!

```
<script>
	$(function() {

		$('body').navHighlighter({
			underlineColour : 'red',
			blur : '2px',
			height : '7px'
		});

	});
</script>
```

** Please note that the demo page uses the plugin defaults and some additional CSS and jQuery that is not included in the plugin. If you want the code for the sticky nav, I've included all the files for the demo page, feel free to take the code included in the script.js and docs.css files. Thanks!
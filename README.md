fps
===

Measures frames per second

Installation
------------

You can acquire `fps` via bower

```sh
bower install cois-fps
```

and then include it in your html page

```html
<script type="text/javascript" src="bower_components/cois-fps/fps.js"></script>
```

Usage
-----

You first need to create a `fps.FrameCounter`

```js
var counter = new fps.FrameCounter();
```

This `counter` can be used to count frames e.g. in a game loop.

```js
function tick() {
	counter.registerFrame();
	requestAnimationFrame(tick);
}
```

You can then retrieve the frames per second `fps` method.

```js
var fpsSpan = document.getElementById('fps');
setInterval(function(){
	fpsSpan.textContent = counter.fps() + ' fps';
}, 1000); // update every second
```

;(function(ns, undefined){
	var fps = ns.fps = {};

	function now(){ return new Date(); };

	fps.averageStrategy = function(strength){
		var frameTime = 0;
		return function(currentTime, lastTime) {
			var currentFrameTime = currentTime - lastTime;
			frameTime += (currentFrameTime - frameTime) / strength;
			return 1000 / frameTime;
		}
	};

	var FrameCounter = fps.FrameCounter = function(options){
		options = options || {};
		this.clock = options.clock || now;
		this.strategy = options.strategy || fps.averageStrategy(20);
		this.lastTime = this.clock();
		this._fps = 0;
	};
	FrameCounter.prototype.registerFrame = function(){
		var currentTime = this.clock();
		this._fps = this.strategy(currentTime, this.lastTime);
		this.lastTime = currentTime;

	};
	FrameCounter.prototype.fps = function(){
		return this._fps;
	};
})(window);

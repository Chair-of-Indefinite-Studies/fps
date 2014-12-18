;(function(ns){
	ns.constantIncrementClock = function(increment) {
		var time = 0;
		return function(){
			return time = time + increment;
		}
	};
})(window);

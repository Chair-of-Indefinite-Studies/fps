describe('fps', function(){
	it('should exist', function(){
		expect(fps).toBeDefined();
	});

	it('should provide a \'FrameCounter\'', function(){
		expect(fps.FrameCounter).toBeDefined();
	});

	it('should provide an \'averageStrategy\'', function(){
		expect(fps.averageStrategy).toBeDefined();
	});

	describe('FrameCounter', function(){
		var instantaneous;

		beforeEach(function(){
			instantaneous = function(currentTime, lastTime) {
				return 1000/(currentTime - lastTime)
			};
		});

		it('should create frame counters', function(){
			expect(new fps.FrameCounter()).toBeDefined();
		});

		it('should register frames', function(){
			var counter = new fps.FrameCounter({
				strategy: instantaneous,
				clock : constantIncrementClock(1000)
			});

			counter.registerFrame();

			expect(counter.fps()).toBe(1);
		});

		it('should register frames and calculate fps', function(){
			var counter = new fps.FrameCounter({
				strategy: instantaneous,
				clock : constantIncrementClock(500)
			});

			counter.registerFrame();

			expect(counter.fps()).toBe(2);
		});
	});

	describe('averageStrategy', function(){
		it('should average', function(){
			var strategy = fps.averageStrategy(2);

			var result = strategy(1000, 0);

			expect(result).toBe(2);
		});

		it('should average depending on strength', function(){
			var strategy = fps.averageStrategy(4);

			var result = strategy(1000, 0);

			expect(result).toBe(4);
		});
	});
});

function Stopwatch() {
    let startTime, duration = 0;

    this.start = function() {
        startTime = new Date();
    };
    this.stop = function() {
        duration += (new Date() - startTime) / 1000;
    };
    this.reset = function() {
        duration = 0;
    };
    Object.defineProperty(this, "duration", { get: () => duration })
}